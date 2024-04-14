import { useState } from 'react';

import { FlexBox, Typography } from '@components/Base';
import { IconButton, ToggleButton, ToggleButtonGroup } from '@components/Button';
import Skeleton from '@components/Loader/Skeleton';
import { useAlert } from '@components/useAlert';

import { WarningFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

// Dialog, Progress ...
export default function FeedbackExample() {
    const { isMobile, isTablet } = useMobile();
    const { handleMessage } = useAlert();

    const [selected, setSelected] = useState('Alert');

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
                Feedback Playground
            </Typography>
            <div className="max-w-full overflow-x-auto scrollbar-hide">
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Alert"
                    >
                        Alert
                    </ToggleButton>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Skeleton"
                    >
                        Skeleton
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="shadow03 flex w-full items-center justify-center rounded border border-primary-100 p-20">
                {selected === 'Alert' && (
                    <IconButton
                        variant="text"
                        size="large"
                        onClick={() => handleMessage('오류가 발생하였습니다.', { variant: 'error' })}
                    >
                        <WarningFilled className="text-red-600" />
                    </IconButton>
                )}
                {selected === 'Skeleton' && (
                    <div className="flex w-full flex-col gap-20 rounded border border-primary-600 p-20 under-mobile:gap-10">
                        <Skeleton height="h-320 under-mobile:h-160" />
                        <div className="flex gap-10">
                            <Skeleton variant="circular" size={isMobile ? 'small' : 'large'} />
                            <Skeleton size={isMobile ? 'small' : 'large'} />
                        </div>
                    </div>
                )}
            </div>
        </FlexBox>
    );
}
