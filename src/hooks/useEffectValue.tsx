type EffectValuePropsType = {
  effects: {
    scroll: number[];
    opacity: number[];
    translateY: number[];
  };
  effectType: string;
  sceneHeight: number;
  scrollPositionY: number;
};

const useEffectValue = ({ effects, effectType, sceneHeight, scrollPositionY }: EffectValuePropsType) => {
  const partScrollMid = ((effects.scroll[2] + effects.scroll[1]) / 2) * sceneHeight;
  const startIndex = scrollPositionY < partScrollMid ? 0 : 2;
  const endIndex = scrollPositionY < partScrollMid ? 1 : 3;
  const partScrollStart = effects.scroll[startIndex] * sceneHeight;
  const partScrollEnd = effects.scroll[endIndex] * sceneHeight;
  const partScrollHeight = partScrollEnd - partScrollStart;

  if (scrollPositionY >= partScrollStart && scrollPositionY <= partScrollEnd) {
    return (
      ((scrollPositionY - partScrollStart) / partScrollHeight) *
        (effects[effectType][endIndex] - effects[effectType][startIndex]) +
      effects[effectType][startIndex]
    );
  } else if (scrollPositionY < partScrollStart) {
    return effects[effectType][startIndex];
  } else if (scrollPositionY > partScrollEnd) {
    return effects[effectType][endIndex];
  }
};

export default useEffectValue;
