import { WarningFilled } from '@fluentui/react-icons';

import IconButton from '@components/Button/IconButton';
import { useAlert } from '@components/useAlert';

export default function AlertExample() {
    const { onAlert } = useAlert();

    return (
        <IconButton variant="text" size="large" onClick={() => onAlert('오류가 발생하였습니다.', { variant: 'error' })}>
            <WarningFilled className="text-red-600" />
        </IconButton>
    );
}
