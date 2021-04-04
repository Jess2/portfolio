import { useState, useEffect } from 'react';
import useMounted from 'hooks/useMounted';

const useScrollPositionY = () => {
  const isMounted: boolean = useMounted();
  const [positionY, setPositionY] = useState<number>(0);
  const onScroll = () => {
    setPositionY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isMounted]);

  return positionY;
};

export default useScrollPositionY;
