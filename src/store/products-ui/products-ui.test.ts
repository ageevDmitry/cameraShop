import {productsUI, changeCurrentCatalogPage} from './products-ui';
import {PaginationUI} from '../../const';

const newCUrrentCatalogPage = 2;

describe('Reducer:productsUI', () => {
  it('without additional parameters should return initial state', () => {
    expect(productsUI.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        currentCatalogPage: PaginationUI.DefaultCatalogPage,
      });
  });

  it('should changeCurrentCatalogPage', () => {
    const state = {
      currentCatalogPage: PaginationUI.DefaultCatalogPage,
    };

    expect(productsUI.reducer(state, changeCurrentCatalogPage({page: newCUrrentCatalogPage})))
      .toEqual({
        currentCatalogPage: newCUrrentCatalogPage,
      });
  });
});
