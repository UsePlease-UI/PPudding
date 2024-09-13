import { joinClassNames } from '@utils/format';

import { VariantType } from '../styles';

const style = {
  outlined: joinClassNames('border border-primary-700 bg-white'),
  contained: joinClassNames('border border-primary-600 bg-primary-600'),
  text: joinClassNames('border-[0.3px] border-gray-200 bg-white'),
};

export const getVariantStyle = (variant?: VariantType) => {
  return variant ? style[variant] : style.outlined;
};
