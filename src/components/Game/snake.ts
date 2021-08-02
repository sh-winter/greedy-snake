/*
* @Author: your name
* @Date: 2021-08-02 21:38:44
 * @LastEditTime: 2021-08-02 23:08:48
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \greedy-snake\src\components\Game\snake.ts
*/
import { Application, Graphics, Container } from "pixi.js"
import { SIZE } from './config'

type Direction = 'up' | 'right' | 'down' | 'left'

export type Snake = {
  body: {
      x: number;
      y: number;
      node?: Graphics;
  }[];
  direction: Direction;
  render: () => void;
  move: () => void
}

export default function useSnake(game: Application) {

  const snake: Snake = {
    body: [{x: 10, y: 10}, {x: 11, y: 10}, {x: 12, y: 10},  {x: 13, y: 10}, {x: 14, y: 10}],
    direction: 'right',
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
    move() {

      this.body.shift()?.node?.destroy()
      
      const newHead = (() => {
        const {x, y} = this.body[this.body.length - 1]
        switch(this.direction) {
          case 'left': return {x: x - 1, y}
          case 'right': return {x: x + 1, y}
          case 'up': return {x, y: y - 1}
          case 'down': return {x, y: y + 1}
        }
      })()
      this.body.push(newHead) // 将尾巴移到头部
    }
  }

  return snake
}