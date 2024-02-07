import { UserCircleIcon } from '@heroicons/react/24/outline';

import { FlexBox, Typography } from 'components/Base';
import Button from 'components/Button/Button';
import Popover from 'components/Shared/Popover';
import usePopover from 'components/Shared/usePopover';

// Popover, DatePicker ...
export default function UtilitiesExample() {
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

    return (
        <FlexBox flexDirection="column" gap={20}>
            <Typography component="h2" fontSize={24}>
                Popover
            </Typography>
            <FlexBox>
                <Button hasStartIcon icon={<UserCircleIcon />} size="large" variant="outlined" onClick={handleOpen}>
                    akffkdahffkdgo77
                </Button>
            </FlexBox>
            <Popover
                isOpen={isOpen}
                anchorPosition={{ vertical: 'bottom', horizontal: 'left' }}
                anchorElement={anchorElement}
                onClose={handleClose}
            >
                <FlexBox flexDirection="column" gap={10} customCSS={{ width: 178 }}>
                    <Typography fontSize={18} fontWeight="600">
                        프로필
                    </Typography>
                    <Typography fontSize={18} fontWeight="600">
                        계정정보
                    </Typography>
                    <Typography fontSize={18} fontWeight="600">
                        로그아웃
                    </Typography>
                </FlexBox>
            </Popover>
        </FlexBox>
    );
}
