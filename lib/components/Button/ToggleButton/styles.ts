import { joinClassNames } from '@utils/format';

import { ButtonSizeType, commonButtonStyle } from '../styles';

const sizeStyle = {
  largeText: joinClassNames('p-[8.5px] text-18'),
  mediumText: joinClassNames('p-2 text-16'),
  miniText: joinClassNames('p-1.25 text-12 font-semibold'),
  smallText: joinClassNames('p-1.5 text-14'),
};

export const getToggleButtonSizeStyle = (size?: ButtonSizeType) => {
  switch (size) {
    case 'small':
      return { icon: commonButtonStyle.smallIcon, text: sizeStyle.smallText };
    case 'medium':
      return { icon: commonButtonStyle.mediumIcon, text: sizeStyle.mediumText };
    case 'large':
      return { icon: commonButtonStyle.largeIcon, text: sizeStyle.largeText };
    default:
      return { icon: commonButtonStyle.miniIcon, text: sizeStyle.miniText };
  }
};
