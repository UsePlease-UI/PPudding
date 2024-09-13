import { joinClassNames } from '@utils/format';

import { getCircularStyle, getSizeStyle, getVariantStyle, SizeType, VariantType } from './styles';

type SkeletonType = {
  backgroundColor?: string;
  borderRadius?: string;
  height?: string;
  size?: SizeType;
  variant?: VariantType;
  width?: string;
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
  backgroundColor,
  borderRadius,
  height,
  size = 'medium',
  variant = 'rounded',
  width,
}: SkeletonType) {
  return (
    <div
      className={joinClassNames(
        'h-7.5 w-full animate-blink cursor-progress rounded bg-gray-100',
        getSizeStyle(size),
        variant !== 'circular' && getVariantStyle(variant),
        variant === 'circular' && getCircularStyle(size),
        width,
        height,
        borderRadius,
        backgroundColor,
      )}
    />
  );
}
