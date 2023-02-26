import {useEffect} from 'react';

export function useClickFilterPrice(handleChangeFilterPrice: () => void) {

  useEffect(() => {
    function handleClick(evt: MouseEvent) {
      const target = evt.target as HTMLElement;
      if (!target.classList.contains('catalog-filter__reset-btn')) {
        handleChangeFilterPrice();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleChangeFilterPrice]);
}
