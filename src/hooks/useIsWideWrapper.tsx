import useWindowWidth from 'hooks/useWindowWidth';
import useWindowHeight from 'hooks/useWindowHeight';
import { theme } from 'styles/theme';

type IsWideWrapperPropsType = {
  imgWidth: number;
  imgHeight: number;
  wrapperWidth?: number;
  wrapperHeight?: number;
  isFull?: boolean;
  isMobileTabletFull?: boolean;
};

const useIsWideWrapper = ({
  imgWidth,
  imgHeight,
  wrapperWidth,
  wrapperHeight,
  isFull = false,
  isMobileTabletFull = false,
}: IsWideWrapperPropsType) => {
  const windowWidth: number = wrapperWidth || useWindowWidth();
  let windowHeight: number;

  if (wrapperHeight) {
    windowHeight = wrapperHeight;
  } else if (isFull) {
    windowHeight = useWindowHeight();
  } else if (isMobileTabletFull && windowWidth <= theme.mediaSizes.tablet) {
    windowHeight = useWindowHeight();
  } else {
    windowHeight = useWindowHeight() * 0.7;
  }

  const imageRatio = imgWidth / imgHeight;
  const windowRatio = windowWidth / windowHeight;

  return imageRatio < windowRatio;
};

export default useIsWideWrapper;
