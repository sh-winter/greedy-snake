/*
 * @Author: your name
 * @Date: 2021-08-02 23:24:57
 * @LastEditTime: 2021-08-03 21:56:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \greedy-snake\src\components\Game\key.ts
 */
import { Application } from "pixi.js"
import { Snake } from "./snake"

const useKey = (game: Application, snake: Snake, move: () => void) => {
  const onKeyDown = ({ key }: KeyboardEvent) => {
    switch(key) {
      case 'ArrowUp': {
        if (snake.direction !== 'down') {
          snake.direction = 'up'
          move()
        }
        return
      }
      case 'ArrowDown': {
        if (snake.direction !== 'up') {
          snake.direction = 'down'
          move()
        }
        return
      }
      case 'ArrowLeft': {
        if (snake.direction !== 'right') {
          snake.direction = 'left'
          move()
        }
        return
      }
      case 'ArrowRight': {
        if (snake.direction !== 'left') {
          snake.direction = 'right'
          move()
        }
        return
      }
    }
  }
  document.addEventListener('keydown', onKeyDown)

  const removeListener = () => document.removeEventListener('keydown', onKeyDown)

  return removeListener
}

export default useKey