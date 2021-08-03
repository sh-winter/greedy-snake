/*
 * @Author: your name
 * @Date: 2021-08-03 20:56:52
 * @LastEditTime: 2021-08-03 21:33:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \greedy-snake\src\components\Game\food.ts
 */
import { Application, Graphics } from "pixi.js"
import { Map } from './map'
import { Snake } from "./snake"
import { SIZE } from './config'

type Position = {
  x: number;
  y: number
}

export type Food = {
  x: number;
  y: number;
  regen(): Food;
}

const random = (start: number, end: number) => Math.floor(Math.random() * (end - start + 1)) + start

const useFood = (game: Application, map: Map, snake: Snake) => {
  const { rows, columns } = map

  const getPos = (): Position => {
    const x = random(0, columns - 1)
    const y = random(0, rows - 1)
    if (snake.body.find(({ x: _x, y: _y }) => _x === x && _y === y)) return getPos()
    return { x, y }
  }

  const node = (() => {
    return game.stage.addChild(Object.assign(new Graphics, { width: SIZE, height: SIZE })
            .beginFill(0xc6001a, 1)
            .drawRect(0, 0, SIZE, SIZE)
            .endFill())
  })()

  const food: Food = {
    x: 0,
    y: 0,
    regen() {
      const { x, y } = getPos()
      console.log('{ x, y }: ', { x, y });
      Object.assign(this, { x, y })
      Object.assign(node, { x: x * SIZE , y: y * SIZE })
      return this
    }
  }

  food.regen() // 初始化执行

  return food
}

export default useFood