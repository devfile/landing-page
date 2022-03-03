import type { WindowDimensions } from 'custom-types';
import { useState, useEffect } from 'react';

export function useWindowDimensions(): WindowDimensions {
  const hasWindow = typeof window !== 'undefined';

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(hasWindow));

  useEffect(() => {
    if (hasWindow) {
      const handleResize = (): void => {
        setWindowDimensions(getWindowDimensions(hasWindow));
      };

      window.addEventListener('resize', handleResize);
      return (): void => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}

const getWindowDimensions = (hasWindow: boolean): WindowDimensions => {
  const width = hasWindow ? window.innerWidth : undefined;
  const height = hasWindow ? window.innerHeight : undefined;
  return {
    width,
    height,
  };
};
