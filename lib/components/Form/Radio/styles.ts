export type RadioSizeType = 'large' | 'medium' | 'small';
export type RadioPositionType = 'end' | 'start';

const sizeStyle = {
  largeContainer: 'w-9 h-9 p-1',
  largeDefault: 'w-6 h-6 m-0.5 *:w-3 *:h-3',
  largeText: 'text-20 ml-2',
  mediumContainer: 'w-8 h-8 p-1',
  mediumDefault: 'w-5 h-5 m-0.5 *:w-2.5 *:h-2.5',
  mediumText: 'text-16 ml-1',
  smallContainer: 'w-7 h-7 p-1',
  smallDefault: 'w-4 h-4 m-0.5 *:w-1.5 *:h-1.5',
  smallText: 'text-12 ml-0.5',
};

export function getSizeStyle(size?: RadioSizeType) {
  switch (size) {
    case 'medium':
      return {
        container: sizeStyle.mediumContainer,
        default: sizeStyle.mediumDefault,
        text: sizeStyle.mediumText,
      };
    case 'large':
      return {
        container: sizeStyle.largeContainer,
        default: sizeStyle.largeDefault,
        text: sizeStyle.largeText,
      };
    default:
      return {
        container: sizeStyle.smallContainer,
        default: sizeStyle.smallDefault,
        text: sizeStyle.smallText,
      };
  }
}
