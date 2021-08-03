/*
 * @Author: your name
 * @Date: 2021-08-02 21:37:45
 * @LastEditTime: 2021-08-03 21:46:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \greedy-snake\src\components\Game\map.ts
 */
import { Application, Graphics } from "pixi.js";
import { SIZE } from "./config";

export type Map = {
    rows: number;
    columns: number;
    render: () => void;
}

const useMap = (game: Application) => {
  const { width, height } = game.screen
  const rows = Math.floor(height / SIZE);
  const columns = Math.floor(width / SIZE);

  const map: Map = {
    rows,
    columns,
    render() {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          if (i % 2 || j % 2) continue;
          const graphics = new Graphics;
          graphics.beginFill(0x0000ff, .3)
                  .drawRect(j * SIZE, i * SIZE, SIZE, SIZE)
                  .endFill()
          game.stage.addChild(graphics)
        }
      }
    }
  }

  map.render()

  return map
}

export default useMap