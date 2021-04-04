import { useState, useEffect } from 'react';
import useMounted from 'hooks/useMounted';

const useWindowHeight = () => {
  const isMounted: boolean = useMounted();
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(window.innerHeight);

    const onResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isMounted]);

  return height;
};

export default useWindowHeight;
