import { joinClassNames } from '@utils/format';

import { ButtonVariantType } from '../styles';

const style = {
  contained: joinClassNames('border border-primary-600 bg-primary-600'),
  outlined: joinClassNames('border border-primary-700 bg-white'),
  text: joinClassNames('border-[0.3px] border-gray-200 bg-white'),
};

export const getChipVariantStyle = (variant?: ButtonVariantType) => {
  return variant ? style[variant] : style.outlined;
};
