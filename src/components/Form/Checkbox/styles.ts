export type SizeType = 'large' | 'medium' | 'small';
export type PositionType = 'end' | 'start';

// default -> 16px
// custom -> 20px
// every size -> + 4px more
const sizeStyle = {
  smallText: 'text-12 ml-0.5',
  smallDefault: 'w-4 h-4 m-0.5 child-svg:w-3 child-svg:h-3',
  smallCustom: 'w-5 h-5 child-svg:w-5 child-svg:h-5',
  mediumText: 'text-16 ml-1',
  mediumDefault: 'w-5 h-5 m-0.5 child-svg:w-4 child-svg:h-4',
  mediumCustom: 'w-6 h-6 child-svg:w-6 child-svg:h-6',
  largeText: 'text-20 ml-2',
  largeDefault: 'w-6 h-6 m-0.5 child-svg:w-5 child-svg:h-5',
  largeCustom: 'w-7 h-7 child-svg:w-7 child-svg:h-7',
};

export function getSizeStyle(size?: SizeType) {
  switch (size) {
    case 'medium':
      return {
        text: sizeStyle.mediumText,
        default: sizeStyle.mediumDefault,
        custom: sizeStyle.mediumCustom,
      };
    case 'large':
      return {
        text: sizeStyle.largeText,
        default: sizeStyle.largeDefault,
        custom: sizeStyle.largeCustom,
      };
    default:
      return {
        text: sizeStyle.smallText,
        default: sizeStyle.smallDefault,
        custom: sizeStyle.smallCustom,
      };
  }
}
