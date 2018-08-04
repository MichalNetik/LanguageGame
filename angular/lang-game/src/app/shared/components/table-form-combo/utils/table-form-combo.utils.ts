import * as WordPairsActions from '../../../../modules/vocabulary/word-pairs/store/word-pairs.actions';
import * as WordPairCategoriesActions from '../../../../modules/vocabulary/word-pair-categories/store/word-pair-categories.actions';


export const getAction = (tableType: string, actionName: string) => {
  switch (tableType) {
    case 'word-pairs':
      return WordPairsActions[actionName];
    case 'word-pair-categories':
      return WordPairCategoriesActions[actionName];
  }
}
