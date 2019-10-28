import { Grid } from 'tetris-engine';

export class GridUtils {
  private static mirror = (rows: Grid) => {
    return rows.map(row => [...row].reverse());
  }

  private static transpose = (rows: Grid) => {
    return rows[0].map((col, i) => rows.map(row => row[i]));
  }

  static projectSideways = (rows: Grid) => {
    return GridUtils.mirror(GridUtils.transpose(rows));
  }
}
