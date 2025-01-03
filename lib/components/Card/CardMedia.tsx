import { HTMLAttributes, useState } from 'react';

import Skeleton from '@components/Loader/Skeleton';

import { joinClassNames } from '@utils/format';

export interface CardMediaType extends HTMLAttributes<HTMLDivElement> {
  src: string;
  type: 'image' | 'video';
  height?: number;
  muted?: boolean;
  // Style
  width?: number;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  // Video
  videoType?: string;
}

export default function CardMedia(props: CardMediaType) {
  const { autoPlay, className, controls, height, loop, muted, src, type, videoType, width, ...rest } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div {...rest} className={joinClassNames('relative size-max', className && className)}>
      <div className={isLoaded ? 'hidden' : 'absolute inset-0'}>
        <Skeleton className="h-full w-full rounded-none" />
      </div>
      {type === 'image' ? (
        <img
          alt="card media"
          className="object-cover"
          height={height}
          src={src}
          style={{ height, width }}
          width={width}
          onLoad={() => setIsLoaded(true)}
        />
      ) : (
        <video
          className="object-cover"
          height={height}
          muted={muted}
          style={{ height, width }}
          width={width}
          autoPlay={autoPlay}
          controls={controls}
          loop={loop}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type={videoType} />
        </video>
      )}
    </div>
  );
}
