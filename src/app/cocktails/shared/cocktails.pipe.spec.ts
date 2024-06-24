import { CocktailsPipe } from './cocktails.pipe';

describe('CocktailsPipe', () => {
  it('create an instance', () => {
    const pipe = new CocktailsPipe();
    expect(pipe).toBeTruthy();
  });
});
