import { GAME_STATUS } from '../../../domain/Engine';
import React, { FunctionComponent } from 'react';

type Props = {
  status: GAME_STATUS;
}

export const GameStatus: FunctionComponent<Props> = ({ status }) => {
  const statusMessage = {
    [GAME_STATUS.INIT]: 'LOADING',
    [GAME_STATUS.WORK]: 'IN PROGRESS',
    [GAME_STATUS.OVER]: 'GAME OVER',
    [GAME_STATUS.PAUSE]: 'PAUSED',
  }[status];

  return <h5>STATUS: {statusMessage}</h5>;
};
