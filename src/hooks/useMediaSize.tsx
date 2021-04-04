import { useState, useEffect } from 'react';
import { theme } from 'styles/theme';
import useWindowWidth from 'hooks/useWindowWidth';
import useWindowHeight from 'hooks/useWindowHeight';

const useMediaSize = () => {
  const windowWidth: number = useWindowWidth();
  const windowHeight: number = useWindowHeight();
  const [mediaSize, setMediaSize] = useState<string>('');

  useEffect(() => {
    if (windowWidth >= theme.mediaSizes.desktop) {
      setMediaSize('desktop');
    } else if (windowWidth >= theme.mediaSizes.tablet) {
      setMediaSize('tablet');
    } else {
      setMediaSize('mobile');
    }
  }, [windowWidth, windowHeight]);

  return mediaSize;
};

export default useMediaSize;
