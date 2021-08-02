/*
 * @Author: your name
 * @Date: 2021-08-02 21:37:45
 * @LastEditTime: 2021-08-02 22:19:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \greedy-snake\src\components\Game\map.ts
 */
import { Application, Graphics } from "pixi.js";
import { SIZE } from "./config";

const useMap = (game: Application) => {
  const { width, height } = game.screen
  const rowsNumber = height / SIZE;
  const columnsNumber = width / SIZE;

  const renderMap = () => {
    for (let i = 0; i < rowsNumber; i++) {
      for (let j = 0; j < columnsNumber; j++) {
        if (i % 2 || j % 2) continue;
        const graphics = new Graphics;
        graphics.beginFill(0x0000ff, .3)
                .drawRect(j * SIZE, i * SIZE, SIZE, SIZE)
                .endFill()
        game.stage.addChild(graphics)
      }
    }
  }

  return renderMap
}

export default useMap