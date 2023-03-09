// import {productsUI, changeCurrentCatalogPage} from './products-ui';
import {productsUI} from './products-ui';
import {currentCatalogPagePath} from '../../types/ui';

describe('Reducer:productsUI', () => {
  it('without additional parameters should return initial state', () => {
    expect(productsUI.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        currentCatalogPagePath: {} as currentCatalogPagePath,
        currentMinPrice: null,
        currentMaxPrice: null,
      });
  });
});
