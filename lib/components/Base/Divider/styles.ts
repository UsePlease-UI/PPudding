export type DividerOrientationType = 'horizontal' | 'vertical';

export const getDividerOrientationStyle = (orientation?: DividerOrientationType) => {
  if (orientation === 'vertical') {
    return 'h-auto w-px self-stretch shrink-0 mx-5';
  }
  return 'w-full h-px my-5';
};
