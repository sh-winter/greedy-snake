/*
 * @Author: your name
 * @Date: 2021-08-02 21:39:10
 * @LastEditTime: 2021-08-05 13:22:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \greedy-snake\src\components\Game\game.ts
 */
import { Ref, onMounted } from 'vue'
import { Application } from 'pixi.js'
import useMap, { Map } from './map'
import useSnake, { Snake } from './snake'
import useFood, { Food } from './food'
import useKey from './key'

function init(container: HTMLElement | undefined, game: Application) {
  container?.appendChild(game.view) // 添加至 dom
  const map = useMap(game) // 使用地图
  const snake = useSnake(game) // 使用模型
  const food = useFood(game, map, snake)

  run(game, map, snake, food)
}

function run(game: Application, map: Map, snake: Snake, food: Food) {
  console.log('游戏开始! ');

  let idx = 0,
    removeListener = useKey(game, snake, move)

  function move() {
    try {
      snake.move(map, food)
    } catch (e) {
      removeListener?.()
      console.log(e.message);
      game.ticker.remove(onTicker)
    }
  }

  function onTicker() {
    if (!(++idx % 15)) move()
  }
  
  game.ticker.add(onTicker)

}

const useGame = (container: Ref<HTMLElement | undefined>) => {
  // 实例化 pixi 应用
  const game = new Application({ width: document.body.clientWidth, height: document.body.clientHeight })

  // 在dom准备好后，初始化应用程序
  onMounted(() => init(container.value, game))

  return game
}

export default useGame