import React, { FunctionComponent } from 'react';
import { Url } from '../Url/Url';
import { GridUtils } from '../../../domain/GridUtils';
import { Grid } from 'tetris-engine';
import { BrailleConverter } from '../../../domain/BrailleConverter';
import { areaWidth } from '../../../domain/Engine';

type Props = {
  grid: Grid
}

export const BrailleRenderer: FunctionComponent<Props> = ({ grid }) => {
  if (!grid.length) {
    return null;
  }

  const projectedGrid = GridUtils.projectSideways(grid);
  const hash = BrailleConverter.convert(projectedGrid, areaWidth);

  return <Url hash={hash} />;
};
