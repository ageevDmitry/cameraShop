// import {productsUI, changeCurrentCatalogPage} from './products-ui';
import {productsUI} from './products-ui';

describe('Reducer:productsUI', () => {
  it('without additional parameters should return initial state', () => {
    expect(productsUI.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        currentCatalogPage: 1,
      });
  });
});
