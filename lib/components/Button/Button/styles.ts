import { joinClassNames } from '@utils/format';

import { ButtonShapeType, ButtonSizeType, commonButtonStyle } from '../styles';

export const buttonStyle = {
  large: joinClassNames(
    'h-max min-h-11.25 w-max min-w-24 px-4 py-1 text-18 font-medium leading-18 child-svg:h-5 child-svg:w-5',
  ),
  largeCircular: joinClassNames('min-h-11.25 min-w-11.25 rounded-full p-0 text-18 leading-18'),
  medium: joinClassNames(
    'h-max min-h-10 w-max min-w-14 px-4 py-1 text-16 font-medium leading-16 child-svg:h-4.5 child-svg:w-4.5',
  ),
  mediumCircular: joinClassNames('min-h-10 min-w-10 rounded-full p-0 text-16 leading-16'),
  small: joinClassNames(
    'h-max min-h-8 w-max min-w-12 px-3 py-1 text-14 font-normal leading-14 child-svg:h-4 child-svg:w-4',
  ),
  smallCircular: joinClassNames('min-h-8 min-w-8 rounded-full p-0 text-14 leading-3'),
};

export const getButtonSizeStyle = (size?: ButtonSizeType) => {
  return size ? buttonStyle[size] : null;
};

export const getButtonIconShapeStyle = (shape: ButtonShapeType = 'rounded') => {
  return shape ? commonButtonStyle[shape] : commonButtonStyle.rounded;
};

export const getButtonShapeStyle = (size?: ButtonSizeType, shape: ButtonShapeType = 'rounded') => {
  if (shape === 'circular') {
    switch (size) {
      case 'large':
        return buttonStyle.largeCircular;
      case 'medium':
        return buttonStyle.mediumCircular;
      default:
        return buttonStyle.smallCircular;
    }
  }

  return commonButtonStyle[shape];
};
