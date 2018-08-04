import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import * as WordPairsActions from '../../../modules/vocabulary/word-pairs/store/word-pairs.actions';
import * as WordPairCategoriesActions from '../../../modules/vocabulary/word-pair-categories/store/word-pair-categories.actions';

interface Baf {
  data: any,
  totalRecords: any
}

export const getAction = (tableType: string, actionName: string) => {
  switch (tableType) {
    case 'word-pairs':
      return WordPairsActions[actionName];
    case 'word-pair-categories':
      return WordPairCategoriesActions[actionName];
  }
}

// Table Form Combo effect methods
export function getTableDataFetchEffect<PaginationInterface extends any, ItemModel, ItemInterface> (
  $actions: Actions<Action>,
  constructorItemModel: new(data: ItemInterface) => ItemModel,
  typeActions: any,
  service: any
) {
  return $actions
    .ofType(typeActions.FETCH_DATA)
    .pipe(
      switchMap(
        (action: any) => {
          return service.getItems(action.payload);
        }
      ),
      mergeMap(
        (data: PaginationInterface) => {
          const tableData = data.data.map(item => new constructorItemModel(item));
          const totalRecords = data.totalRecords;

          return [
            {
              type: typeActions.SET_DATA,
              payload: tableData
            },
            {
              type: typeActions.SET_TOTAL_RECORDS,
              payload: totalRecords
            }
          ]
        }
      )
    )
}

export function getPaginationEffect(
  $actions: Actions<Action>,
  typeActions: any,
  store: any
) {
  return $actions
  .ofType(
    typeActions.NEXT_PAGE,
    typeActions.PREVIOUS_PAGE,
    typeActions.FIRST_PAGE,
    typeActions.LAST_PAGE,
    typeActions.RESET_PAGINATION,
    typeActions.SET_PAGE_SIZE,
    typeActions.SET_SORT
  )
  .pipe(
    withLatestFrom(
      store
    ),
    map(
      ([action, state]) => {
        return {
          type: typeActions.FETCH_DATA,
          payload: state.urlParams
        }
      }

    )
  )
}

export function getEditEffect<ItemModel>(
  $actions: Actions<Action>,
  typeActions: any,
  ItemModel: any,
  store: any
) {
  return $actions
    .ofType(
      typeActions.SET_SELECTED_ROW
    )
    .pipe(
      withLatestFrom(
        store
      ),
      map(
        ([action, state]) => {
          let item: ItemModel;
          switch (state.selectedRow) {
            case (null):
              item = null;
              break;
            case ('new'):
              item = ItemModel.getEmpty();
              break;
            default:
              item = state.tableData[state.selectedRow];
          }
          return {
            type: typeActions.SET_FORM_ITEM,
            payload: item
          }
        }
      )
    )
}

export function getSaveFormEffect(
  $actions: Actions<Action>,
  typeActions: any,
  service: any,
  store: any
) {
  return $actions
  .ofType(
    typeActions.SAVE_FORM
  )
  .pipe(
    switchMap(
      (action: any) => {
        if (action.payload.id) {
          return service.updateItem(action.payload);
        } else {
          return service.saveItem(action.payload);
        }
      }
    ),
    withLatestFrom(
      store
    ),
    mergeMap(
      ([action, state]) => {
        return [
          {
            type: typeActions.RESET_PAGINATION
          },
          {
            type: typeActions.SET_FORM_ITEM,
            payload: null
          }
        ]
      }
    )
  )
}

export function getDeleteFormEffect(
  $actions: Actions<Action>,
  typeActions: any,
  service: any,
  store: any
) {
  return $actions
  .ofType(
    typeActions.DELETE_FORM
  )
  .pipe(
    switchMap(
      (action: any) => {
        return service.deleteItem(action.payload);
      }
    ),
    withLatestFrom(
      store
    ),
    mergeMap(
      ([action, state]) => {
        return [
          {
            type: typeActions.SET_SELECTED_ROW,
            payload: null
          },
          {
            type: typeActions.FETCH_DATA,
            payload: state.urlParams
          }
        ]
      }
    )
  )
}
