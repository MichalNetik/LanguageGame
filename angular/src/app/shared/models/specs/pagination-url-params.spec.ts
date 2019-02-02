import { PaginationUrlParamsModel } from './../pagination-url-params.model';

describe('Pagination Url Params', () => {
  let model: PaginationUrlParamsModel;

  beforeEach(() => {
    model = PaginationUrlParamsModel.getEmpty('testColumn')
  })

  it('#getEmpty should create an empty instance', () => {
    expect(model.startOffset).toBe(0);
    expect(model.endOffset).toBe(10);
    expect(model.sortColumn).toBe('testColumn');
    expect(model.sortDirection).toBe('asc');
    expect(model.pageSize).toBe(10);
    expect(model.totalRecords).toBe(0);
  });

  it('#getSortIcon should return "sort-up" for the current sort column', () => {
    expect(model.getSortIcon('testColumn')).toBe('sort-up');
  });

  it('#getSortIcon should return "sort-down" for the current sort column', () => {
    model.sortDirection = 'desc';
    expect(model.getSortIcon('testColumn')).toBe('sort-down');
  });

  it('#getSortIcon should return "sort" for a non-sort column', () => {
    expect(model.getSortIcon('anotherTestColumn')).toBe('sort');
  });

  it('#nextPage should return full page if there are enough records for the next page', () => {
    model.totalRecords = 100;

    model.nextPage();

    expect(model.endOffset).toBe(20);
    expect(model.startOffset).toBe(10);
  });

  it('#nextPage should return total records if reached last page', () => {
    model.totalRecords = 14;

    model.nextPage();

    expect(model.endOffset).toBe(14);
    expect(model.startOffset).toBe(10);
  });

  it(
    '#previousPage should display full previous page if there is enough records for the previous page',
    () => {
      model.totalRecords = 100;
      model.endOffset = 30;
      model.startOffset = 20;

      model.previousPage();

      expect(model.startOffset).toBe(10);
      expect(model.endOffset).toBe(20);
    }
  );

  it('#previousPage should go to the first page if there are not enough records for the previous page', () => {
    model.endOffset = 15;
    model.startOffset = 5;

    model.previousPage();

    expect(model.startOffset).toBe(0);
    expect(model.endOffset).toBe(10);
  });

  it('#firstPage should set proper end offset for total records lesser than page size', () => {
    model.endOffset = 25;
    model.startOffset = 15;
    model.pageSize = 10;
    model.totalRecords = 8;

    model.firstPage();

    expect(model.startOffset).toBe(0);
    expect(model.endOffset).toBe(8);
  });

  it('#firstPage should set proper end offset for total records greater than page size', () => {
    model.endOffset = 25;
    model.startOffset = 15;
    model.pageSize = 10;
    model.totalRecords = 12;

    model.firstPage();

    expect(model.startOffset).toBe(0);
    expect(model.endOffset).toBe(10);
  });
});
