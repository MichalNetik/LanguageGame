import { PaginationUrlParamsModel } from '../models/pagination-url-params.model';
import { HttpParams } from '@angular/common/http';


export function toHttpParams(params: PaginationUrlParamsModel | {}): HttpParams {
  return Object.getOwnPropertyNames(params)
      .reduce((p, key) => p.set(key, params[key]), new HttpParams());
}
