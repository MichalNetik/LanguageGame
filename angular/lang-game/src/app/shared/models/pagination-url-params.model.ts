export interface PaginationUrlParamsInterface {
  startOffset: number;
  endOffset: number;
  sortColumn: string;
  sortDirection: string;
  filterColumn?: string;
  filterValue?: string;
}

export class PaginationUrlParamsModel {
  startOffset: number;
  endOffset: number;
  sortColumn: string;
  sortDirection: string;
  filterColumn?: string;
  filterValue?: string;

  static getEmpty() {
    const emptyData = {
      startOffset: 0,
      endOffset: 10,
      sortColumn: 'base',
      sortDirection: 'asc',
    }

    return new this(emptyData);
  }

  constructor(data: PaginationUrlParamsInterface) {
    this.startOffset = data.startOffset;
    this.endOffset = data.endOffset;
    this.sortColumn = data.sortColumn;
    this.sortDirection = data.sortDirection;

    if (data.filterColumn) {
      this.filterColumn = data.filterColumn
    };

    if (data.filterValue) {
      this.filterValue = data.filterValue;
    };
  }
}
