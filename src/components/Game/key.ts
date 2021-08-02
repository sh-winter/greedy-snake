import { Application } from "pixi.js"
import { render } from "./game"
import { Snake } from "./snake"

const useKey = (game: Application, snake: Snake) => {
  document.addEventListener('keydown', ({ key }) => {
    switch(key) {
      case 'ArrowUp': {
        if (snake.direction !== 'down') snake.direction = 'up'
        render(snake)
        return
      }
      case 'ArrowDown': {
        if (snake.direction !== 'up') snake.direction = 'down'
        render(snake)
        return
      }
      case 'ArrowLeft': {
        if (snake.direction !== 'right') snake.direction = 'left'
        render(snake)
        return
      }
      case 'ArrowRight': {
        if (snake.direction !== 'left') snake.direction = 'right'
        render(snake)
        return
      }
    }
  })
}

export default useKey