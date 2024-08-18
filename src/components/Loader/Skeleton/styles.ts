export type SizeType = 'small' | 'medium' | 'large';
export type VariantType = 'circular' | 'square' | 'rounded';

export function getSizeStyle(size: SizeType) {
    switch (size) {
        case 'large':
            return 'w-full h-15';
        case 'small':
            return 'w-full h-5';
        default:
            return 'w-full h-10';
    }
}

export function getCircularStyle(size: SizeType) {
    switch (size) {
        case 'large':
            return 'rounded-full w-15 h-15 shrink-0';
        case 'small':
            return 'rounded-full w-5 h-5 shrink-0';
        default:
            return 'rounded-full w-10 h-10 shrink-0';
    }
}

export function getVariantStyle(variant: VariantType) {
    switch (variant) {
        case 'square':
            return 'rounded-none';
        default:
            return 'rounded-md';
    }
}
