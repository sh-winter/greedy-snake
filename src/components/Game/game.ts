/*
 * @Author: your name
 * @Date: 2021-08-02 21:39:10
 * @LastEditTime: 2021-08-02 23:02:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \greedy-snake\src\components\Game\game.ts
 */
import { Ref, onMounted } from 'vue'
import { Application } from 'pixi.js'
import useMap from './map'
import useSnake, { Snake } from './snake'
import useKey from './key'

function init(container: HTMLElement | undefined, game: Application) {
  container?.appendChild(game.view) // 添加至 dom
  const renderMap = useMap(game) // 使用地图
  const snake = useSnake(game) // 使用模型
  renderMap()
  
  run(game, snake)
}

function run(game: Application, snake: Snake) {
  let idx = 0
  useKey(game, snake)
  snake.render()
  game.ticker.add(() => {
    if (!(++idx % 100)) render(snake)
  })
}

export function render(snake: Snake) {
  snake.move()
  snake.render()
}

const useGame = (container: Ref<HTMLElement|undefined>) => {
  // 实例化 pixi 应用
  const game = new Application({ width: document.body.clientWidth, height: document.body.clientHeight })

  // 在dom准备好后，初始化应用程序
  onMounted(() => init(container.value, game))

  return game
}

export default useGame