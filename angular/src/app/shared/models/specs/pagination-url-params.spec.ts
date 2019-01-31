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
});
