import {useEffect} from 'react';

export function useKeyDownFilterPrice(handleChangeFilterPrice: () => void, ...component: string[]) {

  useEffect(() => {
    function handleKeyDown(evt: KeyboardEvent) {
      if (evt.key === 'Enter') {
        const target = evt.target as HTMLElement;
        if (!target.classList.contains(component[0])
        && !target.classList.contains(component[1])) {
          handleChangeFilterPrice();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleChangeFilterPrice, component]);
}
