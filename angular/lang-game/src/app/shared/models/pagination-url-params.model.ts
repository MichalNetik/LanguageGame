export interface PaginationUrlParamsInterface {
  startOffset: number;
  endOffset: number;
  sortColumn: string;
  sortDirection: string;
  pageSize: number;
  totalRecords: number;
  filterColumn?: string;
  filterValue?: string;
}

export class PaginationUrlParamsModel implements PaginationUrlParamsInterface {
  startOffset: number;
  endOffset: number;
  sortColumn: string;
  sortDirection: string;
  pageSize: number;
  totalRecords: number;
  filterColumn?: string;
  filterValue?: string;

  static getEmpty() {
    const emptyData = {
      startOffset: 0,
      endOffset: 10,
      sortColumn: 'base',
      sortDirection: 'asc',
      pageSize: 10,
      totalRecords: 0
    }

    return new this(emptyData);
  }

  constructor(data: PaginationUrlParamsInterface) {
    this.startOffset = data.startOffset;
    this.endOffset = data.endOffset;
    this.sortColumn = data.sortColumn;
    this.sortDirection = data.sortDirection;
    this.pageSize = data.pageSize;
    this.totalRecords = data.totalRecords;

    if (data.filterColumn) {
      this.filterColumn = data.filterColumn
    };

    if (data.filterValue) {
      this.filterValue = data.filterValue;
    };
  }

  getSortIcon(columnName: string) {
    if (columnName === this.sortColumn) {
      return this.sortDirection === 'asc' ? 'sort-up' : 'sort-down';
    } else {
      return 'sort';
    }
  }

  nextPage() {
    if (this.endOffset !== this.totalRecords) {
      if (this.endOffset + this.pageSize > this.totalRecords) {
        const modRes = this.totalRecords % this.pageSize;
        this.startOffset += this.pageSize;
        this.endOffset += modRes;
      } else {
        this.startOffset += this.pageSize;
        this.endOffset += this.pageSize;
      }
    }
  }

  previousPage() {
    if (this.startOffset - this.pageSize < 0) {
      this.startOffset = 0;
      this.endOffset = this.pageSize;
    } else {
      const modRes = this.endOffset % this.pageSize;

      this.startOffset -= this.pageSize;
      if (modRes) {
        this.endOffset -= modRes;
      } else {
        this.endOffset -= this.pageSize;
      }
    }
  }

  firstPage() {
    this.startOffset = 0;
    this.endOffset = this.pageSize < this.totalRecords
      ? this.pageSize : this.totalRecords;
  }

  lastPage() {
    const modRes = this.totalRecords % this.pageSize;
    const newStartOffset = this.totalRecords - modRes;
    this.startOffset = newStartOffset > 0 ? newStartOffset : 0;
    this.endOffset = this.totalRecords;
  }

  setTotalRecords(value: number) {
    this.totalRecords = value;

    if (this.totalRecords < this.endOffset) {
      this.endOffset = this.totalRecords;
    }
  }

  setPageSize(value: number) {
    this.pageSize = value;

    if (this.startOffset + value > this.totalRecords) {
      this.endOffset = this.totalRecords;
    } else {
      this.endOffset = this.startOffset + value;
    }
  }

  setSort(sortColumn: string) {
    if (this.sortColumn === sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }

    this.sortColumn = sortColumn;
  }

  setFilter({filterColumn, filterValue}: {filterColumn: string, filterValue: string}) {
    if (filterValue === 'all') {
      delete this.filterColumn;
      delete this.filterValue;
    } else {
      this.filterValue = filterValue;
      this.filterColumn = filterColumn;
    }

    this.startOffset = 0;
    this.endOffset = this.pageSize;
  }
}
