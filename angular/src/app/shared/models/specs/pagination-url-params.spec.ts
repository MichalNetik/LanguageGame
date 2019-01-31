import { PaginationUrlParamsModel } from './../pagination-url-params.model';

describe('Pagination Url Params', () => {
  it('#getEmpty should create an empty instance', () => {
    const item = PaginationUrlParamsModel.getEmpty('testColumn');

    expect(item.startOffset).toBe(0);
    expect(item.endOffset).toBe(10);
    expect(item.sortColumn).toBe('testColumn');
    expect(item.sortDirection).toBe('asc');
    expect(item.pageSize).toBe(10);
    expect(item.totalRecords).toBe(0);
  });
});
