import { joinClassNames } from '@utils/format';

export type ChipVariantType = 'contained' | 'outlined';

const style = {
  contained: joinClassNames(
    'border border-black bg-black hover:opacity-80 active:opacity-70 disabled:pointer-events-none disabled:border-gray-400 disabled:bg-gray-400 disabled:text-gray-600',
  ),
  outlined: joinClassNames(
    'border border-black bg-white hover:bg-gray-100 active:bg-gray-200 disabled:pointer-events-none disabled:border-gray-400 disabled:bg-gray-100 disabled:text-gray-600',
  ),
};

export const getChipVariantStyle = (variant?: ChipVariantType) => {
  return variant ? style[variant] : style.outlined;
};
