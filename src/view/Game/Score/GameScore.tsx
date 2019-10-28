import React, { FunctionComponent } from 'react';
import { GameStatistic } from 'tetris-engine';

type Props = {
  statistic: GameStatistic;
}

export const GameScore: FunctionComponent<Props> = ({ statistic }) => {
  const singleScore = statistic.countLinesReduced * 1 * 1;
  const doubleScore = statistic.countDoubleLinesReduced * 2 * 3;
  const tripleScore = statistic.countTrippleLinesReduced * 3 * 4;
  const quadScore = statistic.countQuadrupleLinesReduced * 4 * 5;

  const score = singleScore + doubleScore + tripleScore + quadScore;

  return (
    <h5>Score: {score}</h5>
  )
}
