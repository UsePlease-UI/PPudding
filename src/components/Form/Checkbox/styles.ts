export type SizeType = 'small' | 'medium' | 'large';
export type PositionType = 'start' | 'end';

// default -> 16px
// custom -> 20px
// every size -> + 4px more
const sizeStyle = {
    smallText: 'text-12 ml-2',
    smallDefault: 'w-16 h-16 m-2 child-svg:w-12 child-svg:h-12',
    smallCustom: 'w-20 h-20 child-svg:w-20 child-svg:h-20',
    mediumText: 'text-16 ml-4',
    mediumDefault: 'w-20 h-20 m-2 child-svg:w-16 child-svg:h-16',
    mediumCustom: 'w-24 h-24 child-svg:w-24 child-svg:h-24',
    largeText: 'text-20 ml-8',
    largeDefault: 'w-24 h-24 m-2 child-svg:w-20 child-svg:h-20',
    largeCustom: 'w-28 h-28 child-svg:w-28 child-svg:h-28'
};

export function getSizeStyle(size?: SizeType) {
    switch (size) {
        case 'medium':
            return {
                text: sizeStyle.mediumText,
                default: sizeStyle.mediumDefault,
                custom: sizeStyle.mediumCustom
            };
        case 'large':
            return {
                text: sizeStyle.largeText,
                default: sizeStyle.largeDefault,
                custom: sizeStyle.largeCustom
            };
        default:
            return {
                text: sizeStyle.smallText,
                default: sizeStyle.smallDefault,
                custom: sizeStyle.smallCustom
            };
    }
}
