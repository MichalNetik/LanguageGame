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
  })

  it('#nextPage should return total records if reached last page', () => {
    model.totalRecords = 14;

    model.nextPage();

    expect(model.endOffset).toBe(14);
    expect(model.startOffset).toBe(10);
  })
});
