export type ButtonSizeType = 'large' | 'medium' | 'small';
export type IconButtonSizeType = 'mini' | ButtonSizeType;
export type ButtonVariantType = 'contained' | 'outlined' | 'text';
export type ButtonShapeType = 'circular' | 'rounded' | 'square';

export const commonButtonStyle = {
  circular: 'rounded-full',
  contained:
    'text-white bg-black border border-black hover:opacity-80 active:opacity-70 disabled:pointer-events-none disabled:text-gray-600 disabled:border-gray-400 disabled:bg-gray-400',
  largeIcon: 'p-2 *:w-7 *:h-7',
  mediumIcon: 'p-2 *:w-6 *:h-6',
  miniIcon: 'p-1.5 *:w-4 *:h-4',
  outlined:
    'text-black bg-white border border-black hover:bg-gray-100 active:bg-gray-200 disabled:pointer-events-none disabled:text-gray-600 disabled:border-gray-400 disabled:bg-gray-100',
  rounded: 'rounded-lg',
  smallIcon: 'p-[6.5px] *:w-5 *:h-5',
  square: 'rounded',
  text: 'text-black border border-transparent bg-white hover:bg-gray-50 active:bg-gray-100 disabled:pointer-events-none disabled:text-gray-600',
};

export function getCommonButtonVariantStyle(variant?: ButtonVariantType) {
  return variant ? commonButtonStyle[variant] : null;
}

export function getIconButtonSizeStyle(size?: IconButtonSizeType) {
  switch (size) {
    case 'large':
      return commonButtonStyle.largeIcon;
    case 'medium':
      return commonButtonStyle.mediumIcon;
    case 'small':
      return commonButtonStyle.smallIcon;
    default:
      return commonButtonStyle.miniIcon;
  }
}

export function getCommonButtonShapeStyle(shape?: ButtonShapeType) {
  return shape ? commonButtonStyle[shape] : commonButtonStyle.rounded;
}
