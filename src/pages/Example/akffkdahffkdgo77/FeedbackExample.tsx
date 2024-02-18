import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

import { Typography, FlexBox } from 'components/Base';
import IconButton from 'components/Button/IconButton';
import Skeleton from 'components/Loader/Skeleton';
import { useAlert } from 'components/useAlert';

// Dialog, Progress ...
export default function FeedbackExample() {
    const { setMessage } = useAlert();

    return (
        <FlexBox flexDirection="column" gap={10}>
            <Typography component="h2" fontSize={24}>
                Alert
            </Typography>
            <IconButton variant="outlined" size="large" onClick={() => setMessage('Alert!!!!!!')}>
                <ExclamationCircleIcon />
            </IconButton>
            <Typography component="h2" fontSize={24}>
                Skeleton
            </Typography>
            <Skeleton />
        </FlexBox>
    );
}
