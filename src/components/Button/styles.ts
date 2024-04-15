export type SizeType = 'large' | 'medium' | 'small';
export type IconButtonSizeType = SizeType | 'mini';
export type VariantType = 'outlined' | 'contained' | 'text';
export type ShapeType = 'square' | 'rounded' | 'circular';

export const commonStyle = {
    outlined:
        'text-primary-600 bg-white border border-primary-600 hover:text-primary-700 hover:bg-primary-50 focus:text-primary-700 focus:bg-primary-100 focus:border-primary-700 disabled:text-gray-600 disabled:border-gray-600 disabled:bg-gray-50',
    contained:
        'text-white bg-primary-600 border border-primary-600 hover:bg-primary-700 focus:bg-primary-800 focus:border-primary-800 disabled:text-gray-200 disabled:border-gray-400 disabled:bg-gray-400',
    text: 'text-black border border-transparent bg-white hover:bg-gray-50 focus:bg-gray-100 disabled:text-gray-600',
    miniIcon: 'p-6 *:w-16 *:h-16',
    smallIcon: 'p-[6.5px] *:w-20 *:h-20',
    mediumIcon: 'p-8 *:w-24 *:h-24',
    largeIcon: 'p-8 *:w-28 *:h-28',
    rounded: 'rounded-lg',
    circular: 'rounded-full',
    square: 'rounded'
};

export function getVariantStyle(variant?: VariantType) {
    return variant ? commonStyle[variant] : null;
}

export function getSizeStyle(size?: IconButtonSizeType) {
    switch (size) {
        case 'large':
            return commonStyle.largeIcon;
        case 'medium':
            return commonStyle.mediumIcon;
        case 'small':
            return commonStyle.smallIcon;
        default:
            return commonStyle.miniIcon;
    }
}

export function getShapeStyle(shape?: ShapeType) {
    return shape ? commonStyle[shape] : commonStyle.rounded;
}
