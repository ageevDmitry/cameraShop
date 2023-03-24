import {useEffect} from 'react';

export function useClickFilterPrice(handleChangeFilterPrice: () => void, ...component: string[]) {

  useEffect(() => {
    function handleClick(evt: MouseEvent) {
      const target = evt.target as HTMLElement;
      if (!target.classList.contains(component[0])
      && !target.classList.contains(component[1]))
      {
        handleChangeFilterPrice();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleChangeFilterPrice, component]);
}
