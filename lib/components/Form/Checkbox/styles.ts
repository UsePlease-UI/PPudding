export type CheckboxSizeType = 'large' | 'medium' | 'small';
export type CheckboxPositionType = 'end' | 'start';

// default -> 16px
// custom -> 20px
// every size -> + 4px more
const sizeStyle = {
  largeCustom: 'w-7 h-7 child-svg:w-7 child-svg:h-7',
  largeDefault: 'w-6 h-6 m-0.5 child-svg:w-5 child-svg:h-5',
  largeText: 'text-20 ml-2',
  mediumCustom: 'w-6 h-6 child-svg:w-6 child-svg:h-6',
  mediumDefault: 'w-5 h-5 m-0.5 child-svg:w-4 child-svg:h-4',
  mediumText: 'text-16 ml-1',
  smallCustom: 'w-5 h-5 child-svg:w-5 child-svg:h-5',
  smallDefault: 'w-4 h-4 m-0.5 child-svg:w-3 child-svg:h-3',
  smallText: 'text-12 ml-0.5',
};

export function getSizeStyle(size?: CheckboxSizeType) {
  switch (size) {
    case 'medium':
      return {
        custom: sizeStyle.mediumCustom,
        default: sizeStyle.mediumDefault,
        text: sizeStyle.mediumText,
      };
    case 'large':
      return {
        custom: sizeStyle.largeCustom,
        default: sizeStyle.largeDefault,
        text: sizeStyle.largeText,
      };
    default:
      return {
        custom: sizeStyle.smallCustom,
        default: sizeStyle.smallDefault,
        text: sizeStyle.smallText,
      };
  }
}
