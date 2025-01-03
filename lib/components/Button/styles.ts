export type ButtonSizeType = 'large' | 'medium' | 'small';
export type IconButtonSizeType = 'mini' | ButtonSizeType;
export type ButtonVariantType = 'contained' | 'outlined' | 'text';
export type ButtonShapeType = 'circular' | 'rounded' | 'square';

export const commonButtonStyle = {
  circular: 'rounded-full',
  contained:
    'text-primary-950 hover:text-white focus:text-white bg-primary-600 border border-primary-600 hover:bg-primary-700 focus:bg-primary-800 focus:border-primary-800 disabled:text-gray-200 disabled:border-gray-400 disabled:bg-gray-400',
  largeIcon: 'p-2 *:w-7 *:h-7',
  mediumIcon: 'p-2 *:w-6 *:h-6',
  miniIcon: 'p-1.5 *:w-4 *:h-4',
  outlined:
    'text-primary-800 bg-white border border-primary-800 hover:text-primary-900 hover:bg-primary-50 hover:border-primary-900 focus:text-primary-950 focus:bg-primary-100 focus:border-primary-950 disabled:text-gray-600 disabled:border-gray-600 disabled:bg-gray-50',
  rounded: 'rounded-lg',
  smallIcon: 'p-[6.5px] *:w-5 *:h-5',
  square: 'rounded',
  text: 'text-primary-950 border border-transparent bg-white hover:bg-gray-50 focus:bg-gray-100 disabled:text-gray-600',
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
