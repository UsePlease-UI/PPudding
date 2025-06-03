import { joinClassNames } from '@utils/format';

export type ChipVariantType = 'contained' | 'outlined';

const style = {
  contained: joinClassNames('border border-black bg-black'),
  outlined: joinClassNames('border border-black bg-white'),
};

export const getChipVariantStyle = (variant?: ChipVariantType) => {
  return variant ? style[variant] : style.outlined;
};
