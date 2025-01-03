import { SkeletonSizeType, SkeletonVariantType } from './styles';
export interface SkeletonType {
    className?: string;
    size?: SkeletonSizeType;
    variant?: SkeletonVariantType;
}
export default function Skeleton({ className, size, variant }: SkeletonType): import("react/jsx-runtime").JSX.Element;
