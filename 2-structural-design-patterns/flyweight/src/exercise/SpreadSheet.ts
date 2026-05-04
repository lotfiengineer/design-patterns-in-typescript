import Cell from "./Cell";
import { defaultFontFamily } from "./defaultFontFamily";
import FontService from "./FontService";

export default class SpreadSheet {
  private MAX_ROWS = 3;
  private MAX_COLS = 3;

  private fontService: FontService;

  private cells: Cell[][] = [[], [], []];

  constructor(fontService: FontService) {
    this.fontService = fontService;
    this.generateCells();
  }

  setContent(row: number, col: number, content: string) {
    this.ensureCellExists(row, col);

    this.cells[row][col].setContent(content);
  }

  setFontFamily(row: number, col: number, fontFamily: string) {
    this.ensureCellExists(row, col);

    this.cells[row][col].setFont(this.fontService.getFont(fontFamily));
  }

  ensureCellExists(row: number, col: number) {
    if (row < 0 || row >= this.MAX_ROWS) throw new Error();

    if (col < 0 || col >= this.MAX_COLS) throw new Error();
  }

  generateCells() {
    for (var row = 0; row < this.MAX_ROWS; row++)
      for (var col = 0; col < this.MAX_COLS; col++) {
        var cell = new Cell(row, col);
        cell.setFont(this.fontService.getFont(defaultFontFamily));
        this.cells[row][col] = cell;
      }
  }

  render() {
    for (var row = 0; row < this.MAX_ROWS; row++)
      for (var col = 0; col < this.MAX_COLS; col++)
        this.cells[row][col].render();
  }
}
