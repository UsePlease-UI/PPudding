export type SizeType = 'large' | 'medium' | 'small';
export type PositionType = 'end' | 'start';

const sizeStyle = {
  smallContainer: 'w-7 h-7 p-1',
  smallText: 'text-12 ml-0.5',
  smallDefault: 'w-4 h-4 m-0.5 *:w-1.5 *:h-1.5',
  mediumContainer: 'w-8 h-8 p-1',
  mediumText: 'text-16 ml-1',
  mediumDefault: 'w-5 h-5 m-0.5 *:w-2.5 *:h-2.5',
  largeContainer: 'w-9 h-9 p-1',
  largeText: 'text-20 ml-2',
  largeDefault: 'w-6 h-6 m-0.5 *:w-3 *:h-3',
};

export function getSizeStyle(size?: SizeType) {
  switch (size) {
    case 'medium':
      return {
        text: sizeStyle.mediumText,
        default: sizeStyle.mediumDefault,
        container: sizeStyle.mediumContainer,
      };
    case 'large':
      return {
        text: sizeStyle.largeText,
        default: sizeStyle.largeDefault,
        container: sizeStyle.largeContainer,
      };
    default:
      return {
        text: sizeStyle.smallText,
        default: sizeStyle.smallDefault,
        container: sizeStyle.smallContainer,
      };
  }
}
