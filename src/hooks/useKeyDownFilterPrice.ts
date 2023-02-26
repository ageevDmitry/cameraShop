import {useEffect} from 'react';

export function useKeyDownFilterPrice(handleKeyDownFilterPrice: () => void) {

  useEffect(() => {
    function handleKeyDown(evt: KeyboardEvent) {
      if (evt.key === 'Enter') {
        handleKeyDownFilterPrice();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDownFilterPrice]);
}
