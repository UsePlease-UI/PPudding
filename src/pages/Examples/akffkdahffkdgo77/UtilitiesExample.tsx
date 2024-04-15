import { useState } from 'react';

import { FlexBox, Typography } from '@components/Base';
import { Button, ToggleButton, ToggleButtonGroup } from '@components/Button';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';

import { PeopleFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

// Popover, DatePicker ...
export default function UtilitiesExample() {
    const { isMobile, isTablet } = useMobile();
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

    const [selected, setSelected] = useState('Popover');

    return (
        <FlexBox flexDirection="flex-col" gap="gap-10">
            <Typography
                component="h2"
                fontSize="text-24"
                fontWeight="font-black"
                color="text-primary-600"
                textTransform="uppercase"
                margin={isTablet ? 'mb-10' : 'mb-20'}
            >
                Utilities Playground
            </Typography>
            <div className="max-w-full overflow-x-auto scrollbar-hide">
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Popover"
                    >
                        Popover
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="shadow03 flex w-full items-center justify-center rounded border border-primary-100 p-20">
                <Button hasStartIcon icon={<PeopleFilled />} size="large" variant="outlined" onClick={handleOpen}>
                    akffkdahffkdgo77
                </Button>
                <Popover
                    isOpen={isOpen}
                    anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
                    anchorElement={anchorElement}
                    onClose={handleClose}
                >
                    <FlexBox flexDirection="flex-col" gap="gap-10" width="w-178">
                        <Typography fontSize="text-16" fontWeight="font-medium">
                            프로필
                        </Typography>
                        <Typography fontSize="text-16" fontWeight="font-medium">
                            계정정보
                        </Typography>
                        <Typography fontSize="text-16" fontWeight="font-medium">
                            로그아웃
                        </Typography>
                    </FlexBox>
                </Popover>
            </div>
        </FlexBox>
    );
}
