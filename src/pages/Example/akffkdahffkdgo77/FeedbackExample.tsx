import { Typography, FlexBox } from 'components/Base';
import Skeleton from 'components/Loader/Skeleton';

// Dialog, Progress ...
export default function FeedbackExample() {
    return (
        <FlexBox flexDirection="column" gap={10}>
            <Typography component="h2" fontSize={24}>
                Skeleton
            </Typography>
            <Skeleton />
        </FlexBox>
    );
}
