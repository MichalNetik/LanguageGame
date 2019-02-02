import { WordPairCategoryModel } from './../word-pair-category.model';

describe('WordPairCategoryModel', () => {
  it('#getEmpty should create an empty instance', () => {
    const item = WordPairCategoryModel.getEmpty();
    expect(item.id).toBe(null);
    expect(item.name).toBe('');
    expect(item.description).toBe('');
  });
});
