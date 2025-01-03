import { HTMLAttributes } from '../../../node_modules/react';
export interface CardMediaType extends HTMLAttributes<HTMLDivElement> {
    src: string;
    type: 'image' | 'video';
    height?: number;
    muted?: boolean;
    width?: number;
    autoPlay?: boolean;
    controls?: boolean;
    loop?: boolean;
    videoType?: string;
}
export default function CardMedia(props: CardMediaType): import("react/jsx-runtime").JSX.Element;
