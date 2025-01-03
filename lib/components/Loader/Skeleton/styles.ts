export type SkeletonSizeType = 'large' | 'medium' | 'small';
export type SkeletonVariantType = 'circular' | 'rounded' | 'square';

export function getSizeStyle(size: SkeletonSizeType) {
  switch (size) {
    case 'large':
      return 'w-full h-15';
    case 'small':
      return 'w-full h-5';
    default:
      return 'w-full h-10';
  }
}

export function getCircularStyle(size: SkeletonSizeType) {
  switch (size) {
    case 'large':
      return 'rounded-full w-15 h-15 shrink-0';
    case 'small':
      return 'rounded-full w-5 h-5 shrink-0';
    default:
      return 'rounded-full w-10 h-10 shrink-0';
  }
}

export function getVariantStyle(variant: SkeletonVariantType) {
  switch (variant) {
    case 'square':
      return 'rounded-none';
    default:
      return 'rounded-md';
  }
}
