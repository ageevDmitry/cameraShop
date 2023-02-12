import {useEffect} from 'react';

export function useModalClose(closeModalReview: (flag: boolean) => void) {

  useEffect(() => {
    function handleKeyDown(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        closeModalReview(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [closeModalReview]);
}
