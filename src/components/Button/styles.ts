export type SizeType = 'large' | 'medium' | 'small';
export type IconButtonSizeType = SizeType | 'mini';
export type VariantType = 'outlined' | 'contained' | 'text';
export type ShapeType = 'square' | 'rounded' | 'circular';

export const commonStyle = {
    outlined:
        'text-primary-800 bg-white border border-primary-800 hover:text-primary-900 hover:bg-primary-50 hover:border-primary-900 focus:text-primary-950 focus:bg-primary-100 focus:border-primary-950 disabled:text-gray-600 disabled:border-gray-600 disabled:bg-gray-50',
    contained:
        'text-primary-950 hover:text-white focus:text-white bg-primary-600 border border-primary-600 hover:bg-primary-700 focus:bg-primary-800 focus:border-primary-800 disabled:text-gray-200 disabled:border-gray-400 disabled:bg-gray-400',
    text: 'text-primary-950 border border-transparent bg-white hover:bg-gray-50 focus:bg-gray-100 disabled:text-gray-600',
    miniIcon: 'p-1.5 *:w-4 *:h-4',
    smallIcon: 'p-[6.5px] *:w-5 *:h-5',
    mediumIcon: 'p-2 *:w-6 *:h-6',
    largeIcon: 'p-2 *:w-7 *:h-7',
    rounded: 'rounded-lg',
    circular: 'rounded-full',
    square: 'rounded',
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
