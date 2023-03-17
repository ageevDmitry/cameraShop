import {useEffect} from 'react';

export function useKeyDownFilterPrice(handleChangeFilterPrice: () => void) {

  useEffect(() => {
    function handleKeyDown(evt: KeyboardEvent) {
      if (evt.key === 'Enter') {
        const target = evt.target as HTMLElement;
        if (!target.classList.contains('catalog-filter__reset-btn')
        || !target.classList.contains('form-class-submit')) {
          handleChangeFilterPrice();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleChangeFilterPrice]);
}
