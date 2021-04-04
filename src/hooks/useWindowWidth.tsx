import { useState, useEffect } from 'react';
import useMounted from 'hooks/useMounted';

const useWindowWidth = () => {
  const isMounted: boolean = useMounted();
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isMounted]);

  return width;
};

export default useWindowWidth;
