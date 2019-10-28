import { Grid, Row } from "tetris-engine";
import brailleEncode from "braille-encode";

export class BrailleConverter {
  private static prefixHex = (hex: string) => hex.length === 1 ? `0${hex}` : hex;

  private static getColumnBinary = (rows: Grid, columnIndex: number) => {
    return rows.map((row: Row) => row[columnIndex]).map(({ val }) => val).join('');
  };

  static convert = (rows: Grid, areaWidth: number): string => {
    let braille = '';

    for (let i = 0; i < areaWidth; i += 2) {
      const leftBinary = BrailleConverter.getColumnBinary(rows, i);
      const rightBinary = BrailleConverter.getColumnBinary(rows, i + 1);
      const binaryString = `${leftBinary}${rightBinary}`.replace(/2/g, '1');
      const binary = Number.parseInt(binaryString, 2);

      const hexString = binary.toString(16);
      const hex = BrailleConverter.prefixHex(hexString);
      const buf = new Buffer(hex, 'hex');

      const partial = brailleEncode.encode(buf);
      braille = braille.concat(partial);
    }

    return braille;
  };
}
