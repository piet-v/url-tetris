// @ts-ignore
import { Engine, GameState } from "tetris-engine";

export enum GAME_STATUS {
  INIT = 0,
  WORK = 1,
  PAUSE = 2,
  OVER = 3
}

const areaHeight = 4;
export const areaWidth = 20;
const defaultHeap = new Array(areaHeight).fill(new Array(areaWidth).fill(0));

export const createEngine = (onUpdate: (gameState: GameState) => any) => new Engine(
  areaHeight,
  areaWidth,
  onUpdate,
  defaultHeap,
);
