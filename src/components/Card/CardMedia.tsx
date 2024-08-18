import { HTMLAttributes, useState } from 'react';

import Skeleton from '@components/Loader/Skeleton';

type CardMediaType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    type: 'image' | 'video';
    src: string;
    // Video
    videoType?: string;
    controls?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    // Style
    width?: number;
    height?: number;
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
    const { type, videoType, src, loop, autoPlay, muted, controls, width, height, ...rest } = props;
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div {...rest} className="relative h-max w-max">
            <div className={isLoaded ? 'hidden' : 'absolute bottom-0 left-0 right-0 top-0'}>
                <Skeleton width="w-full" height="h-full" borderRadius="rounded-none" />
            </div>
            {type === 'image' ? (
                <img
                    onLoad={() => setIsLoaded(true)}
                    width={width}
                    height={height}
                    src={src}
                    alt="card media"
                    className="object-cover"
                    style={{ width, height }}
                />
            ) : (
                <video
                    width={width}
                    height={height}
                    loop={loop}
                    autoPlay={autoPlay}
                    muted={muted}
                    controls={controls}
                    className="object-cover"
                    onLoadedData={() => setIsLoaded(true)}
                    style={{ width, height }}
                >
                    <source src={src} type={videoType} />
                </video>
            )}
        </div>
    );
}
