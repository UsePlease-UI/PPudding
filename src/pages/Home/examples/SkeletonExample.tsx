import FlexBox from 'components/Base/FlexBox';
import Skeleton from 'components/Loader/Skeleton';

export default function SkeletonExample() {
    return (
        <FlexBox customCSS={{ margin: 20 }}>
            <Skeleton />
        </FlexBox>
    );
}
