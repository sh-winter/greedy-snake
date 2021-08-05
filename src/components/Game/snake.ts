/*
* @Author: your name
* @Date: 2021-08-02 21:38:44
 * @LastEditTime: 2021-08-05 13:21:49
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \greedy-snake\src\components\Game\snake.ts
*/
import { Application, Graphics, Container } from "pixi.js"
import { SIZE } from './config'
import { Food } from "./food"
import { Map } from './map'

type Direction = 'up' | 'right' | 'down' | 'left'

export type Snake = {
  body: {
      x: number;
      y: number;
      node?: Graphics;
  }[];
  direction: Direction;
  render: () => void;
  move: (map: Map, food: Food) => void
}

export default function useSnake(game: Application) {
  const body = [{x: 10, y: 10}, {x: 11, y: 10}, {x: 12, y: 10},  {x: 13, y: 10}, {x: 14, y: 10}]
  const direction = 'right'
  const initialLength = body.length

  const snake: Snake = {
    body,
    direction,
    render() {
      for (let snakeNode of this.body) {
        const { x, y, node } = snakeNode
        const graphics = node || game.stage.addChild(new Graphics);
        Object.assign(graphics, { x: x * SIZE, y: y * SIZE} )

        if (!node) {
          snakeNode.node = Object.assign(graphics, { width: SIZE, height: SIZE })
          graphics.beginFill(0x03ff1e, 1)
                  .drawRect(0, 0, SIZE, SIZE)
                  .endFill()
        }
      }
    },
    move(map: Map, food: Food) {
      const newHead = (() => {
        const {x, y} = this.body[this.body.length - 1]
        switch(this.direction) {
          case 'left': return {x: x - 1, y}
          case 'right': return {x: x + 1, y}
          case 'up': return {x, y: y - 1}
          case 'down': return {x, y: y + 1}
        }
      })()

      const {x, y} = newHead
      
      const collideWithBody = this.body.find(({ x: _x, y: _y }) => x === _x && y === _y)
      const collideWithWall = x < 0 || x > (map.columns - 1) || y < 0 || y > (map.rows - 1)
      if (collideWithBody || collideWithWall) throw new Error('游戏结束! ')

      this.body.push(newHead) // 将尾巴移到头部

      if (x === food.x && y === food.y) { // 吃到食物了
        food.regen()
      } else {
        this.body.shift()?.node?.destroy()
      }
      this.render()
    }
  }

  snake.render()

  return snake
}