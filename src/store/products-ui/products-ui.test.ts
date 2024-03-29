import {productsUI,
  changeCurrentCatalogPagePath,
  changeCurrentMinPrice,
  changeCurrentMaxPrice,
  cleanUpPrice,
  changeIsModalAdd
} from './products-ui';
import {currentCatalogPagePath,
} from '../../types/ui';

const mockCurrentCatalogPage = 5;
const mockCurrentPrice = 1000;

describe('Reducer:productsUI', () => {
  it('without additional parameters should return initial state', () => {
    expect(productsUI.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        currentCatalogPagePath: {} as currentCatalogPagePath,
        currentMinPrice: null,
        currentMaxPrice: null,
        isModalAddCart: false,
      });
  });

  it('should change currentCatalogPagePath', () => {
    const state = {
      currentCatalogPagePath: {} as currentCatalogPagePath,
      currentMinPrice: null,
      currentMaxPrice: null,
      isModalAddCart: false,
    };

    expect(productsUI.reducer(state, changeCurrentCatalogPagePath({
      currentCatalogPage: mockCurrentCatalogPage
    })))
      .toEqual({
        currentCatalogPagePath: {
          currentCatalogPage: mockCurrentCatalogPage
        },
        currentMinPrice: null,
        currentMaxPrice: null,
        isModalAddCart: false,
      });
  });

  it('should change currentMinPrice', () => {
    const state = {
      currentCatalogPagePath: {} as currentCatalogPagePath,
      currentMinPrice: null,
      currentMaxPrice: null,
      isModalAddCart: false,
    };

    expect(productsUI.reducer(state, changeCurrentMinPrice({
      type: mockCurrentPrice
    })))
      .toEqual({
        currentCatalogPagePath: {} as currentCatalogPagePath,
        currentMinPrice: mockCurrentPrice,
        currentMaxPrice: null,
        isModalAddCart: false,
      });
  });

  it('should change currentMaxPrice', () => {
    const state = {
      currentCatalogPagePath: {} as currentCatalogPagePath,
      currentMinPrice: null,
      currentMaxPrice: null,
      isModalAddCart: false,
    };

    expect(productsUI.reducer(state, changeCurrentMaxPrice({
      type: mockCurrentPrice
    })))
      .toEqual({
        currentCatalogPagePath: {} as currentCatalogPagePath,
        currentMinPrice: null,
        currentMaxPrice: mockCurrentPrice,
        isModalAddCart: false,
      });
  });

  it('should change cleanUpPrice', () => {
    const state = {
      currentCatalogPagePath: {} as currentCatalogPagePath,
      currentMinPrice: mockCurrentPrice,
      currentMaxPrice: mockCurrentPrice,
      isModalAddCart: false,
    };

    expect(productsUI.reducer(state, cleanUpPrice()))
      .toEqual({
        currentCatalogPagePath: {} as currentCatalogPagePath,
        currentMinPrice: null,
        currentMaxPrice: null,
        isModalAddCart: false,
      });
  });

  it('should change isModalAdd', () => {
    const state = {
      currentCatalogPagePath: {} as currentCatalogPagePath,
      currentMinPrice: null,
      currentMaxPrice: null,
      isModalAddCart: false,
    };

    expect(productsUI.reducer(state, changeIsModalAdd({type: true})))
      .toEqual({
        currentCatalogPagePath: {} as currentCatalogPagePath,
        currentMinPrice: null,
        currentMaxPrice: null,
        isModalAddCart: true,
      });
  });
});
