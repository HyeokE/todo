import { useEffect, useState } from 'react';

export const useScrollBlock = () => {
  const [scrollBlock, setScrollBlock] = useState(false);
  useEffect(() => {
    if (scrollBlock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [scrollBlock]);

  return [scrollBlock, setScrollBlock] as const;
};
