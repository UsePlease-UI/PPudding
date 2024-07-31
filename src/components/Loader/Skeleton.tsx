import { joinClassNames } from '@utils/format';

import { SizeType, VariantType, getCircularStyle, getSizeStyle, getVariantStyle } from './styles';

type SkeletonType = {
    size?: SizeType;
    variant?: VariantType;
    width?: string;
    height?: string;
    borderRadius?: string;
    backgroundColor?: string;
};

/**
 *  [UI Component] Skeleton Component
 *  @param width [TailwindCSS] Width
 *  @param height [TailwindCSS] Height
 *  @param borderRadius [TailwindCSS] Border Radius
 *  @param backgroundColor [TailwindCSS] Background Color
 *  @returns JSX.Element
 */
export default function Skeleton({
    size = 'medium',
    variant = 'rounded',
    width,
    height,
    borderRadius,
    backgroundColor
}: SkeletonType) {
    return (
        <div
            className={joinClassNames(
                'h-30 w-full animate-blink cursor-progress rounded bg-gray-100',
                getSizeStyle(size),
                variant !== 'circular' && getVariantStyle(variant),
                variant === 'circular' && getCircularStyle(size),
                width,
                height,
                borderRadius,
                backgroundColor
            )}
        />
    );
}
