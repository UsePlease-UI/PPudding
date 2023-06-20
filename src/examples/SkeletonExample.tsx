import FlexBox from '@atoms/FlexBox';
import Skeleton from '@atoms/Skeleton';

export default function SkeletonExample() {
    return (
        <FlexBox customCSS={{ margin: 20 }}>
            <Skeleton />
        </FlexBox>
    );
}
