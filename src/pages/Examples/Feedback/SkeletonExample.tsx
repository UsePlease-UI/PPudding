import Skeleton from '@components/Loader/Skeleton';

import useMobile from '@hooks/useMobile';

export default function SkeletonExample() {
  const { isMobile } = useMobile();

  return (
    <div className="flex w-full flex-col gap-2.5 rounded border border-primary-600 p-5 tablet:gap-5">
      <Skeleton height="h-80 under-mobile:h-160" />
      <div className="flex gap-2.5">
        <Skeleton size={isMobile ? 'small' : 'large'} variant="circular" />
        <Skeleton size={isMobile ? 'small' : 'large'} />
      </div>
    </div>
  );
}
