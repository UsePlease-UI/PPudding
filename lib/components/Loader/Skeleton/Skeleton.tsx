import { joinClassNames } from '@utils/format';

import { getCircularStyle, getSizeStyle, getVariantStyle, SkeletonSizeType, SkeletonVariantType } from './styles';

export interface SkeletonType {
  className?: string;
  size?: SkeletonSizeType;
  variant?: SkeletonVariantType;
}

export default function Skeleton({ className, size = 'medium', variant = 'rounded' }: SkeletonType) {
  return (
    <div
      className={joinClassNames(
        'h-7.5 w-full animate-blink cursor-progress rounded bg-gray-100',
        getSizeStyle(size),
        variant !== 'circular' && getVariantStyle(variant),
        variant === 'circular' && getCircularStyle(size),
        className && className,
      )}
    />
  );
}
