import { HTMLAttributes, useState } from 'react';

import Skeleton from '@components/Loader/Skeleton';

type CardMediaType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    src: string;
    type: 'image' | 'video';
    autoPlay?: boolean;
    controls?: boolean;
    height?: number;
    loop?: boolean;
    muted?: boolean;
    // Video
    videoType?: string;
    // Style
    width?: number;
};

/**
 *  [UI Component] Card Media (Supports Image | Video)
 *  @param type image | video
 *  @param src Image/Video Source
 *  @param [Style] Width
 *  @param [Style] Height
 *  @returns JSX.Element
 */
export default function CardMedia(props: CardMediaType) {
    const { autoPlay, controls, height, loop, muted, src, type, videoType, width, ...rest } = props;
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div {...rest} className="relative size-max">
            <div className={isLoaded ? 'hidden' : 'absolute inset-0'}>
                <Skeleton borderRadius="rounded-none" height="h-full" width="w-full" />
            </div>
            {type === 'image' ? (
                <img
                    alt="card media"
                    className="object-cover"
                    height={height}
                    src={src}
                    style={{ width, height }}
                    width={width}
                    onLoad={() => setIsLoaded(true)}
                />
            ) : (
                <video
                    autoPlay={autoPlay}
                    className="object-cover"
                    controls={controls}
                    height={height}
                    loop={loop}
                    muted={muted}
                    style={{ width, height }}
                    width={width}
                    onLoadedData={() => setIsLoaded(true)}
                >
                    <source src={src} type={videoType} />
                </video>
            )}
        </div>
    );
}
