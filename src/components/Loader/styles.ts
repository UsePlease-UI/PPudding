export type SizeType = 'small' | 'medium' | 'large';
export type VariantType = 'circular' | 'square' | 'rounded';

export function getSizeStyle(size: SizeType) {
    switch (size) {
        case 'large':
            return 'w-full h-60';
        case 'small':
            return 'w-full h-20';
        default:
            return 'w-full h-40';
    }
}

export function getCircularStyle(size: SizeType) {
    switch (size) {
        case 'large':
            return 'rounded-full w-60 h-60 shrink-0';
        case 'small':
            return 'rounded-full w-20 h-20 shrink-0';
        default:
            return 'rounded-full w-40 h-40 shrink-0';
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
