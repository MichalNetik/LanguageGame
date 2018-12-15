import { WordPairModel } from '../word-pair.model';

describe('WordPairModel', () => {
  it('#getEmpty should create an empty instance', () => {
    const item = WordPairModel.getEmpty();
    expect(item.base).toBe('');
    expect(item.category).toBe(null);
    expect(item.description).toBe('');
    expect(item.id).toBe(null);
    expect(item.translated).toBe('');
  });
});
