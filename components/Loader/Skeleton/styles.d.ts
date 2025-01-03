export type SkeletonSizeType = 'large' | 'medium' | 'small';
export type SkeletonVariantType = 'circular' | 'rounded' | 'square';
export declare function getSizeStyle(size: SkeletonSizeType): "w-full h-15" | "w-full h-5" | "w-full h-10";
export declare function getCircularStyle(size: SkeletonSizeType): "rounded-full w-15 h-15 shrink-0" | "rounded-full w-5 h-5 shrink-0" | "rounded-full w-10 h-10 shrink-0";
export declare function getVariantStyle(variant: SkeletonVariantType): "rounded-none" | "rounded-md";
