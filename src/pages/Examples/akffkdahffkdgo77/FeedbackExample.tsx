import { useState } from 'react';

import { FlexBox } from '@components/Base';
import { IconButton, ToggleButton, ToggleButtonGroup } from '@components/Button';
import Skeleton from '@components/Loader/Skeleton';
import { useAlert } from '@components/useAlert';

import { WarningFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

import Heading from '../Common/Heading';
import { customStyles } from '../styles';

const EXAMPLE_LIST = ['Alert', 'Skeleton'];

// Dialog, Progress ...
export default function FeedbackExample() {
    const { isMobile, isTablet } = useMobile();
    const { handleMessage } = useAlert();

    const [selected, setSelected] = useState('Alert');

    return (
        <FlexBox flexDirection="flex-col" gap="gap-10">
            <Heading title="Feedback Playground" />
            <div className="max-w-full overflow-x-auto scrollbar-hide">
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    {EXAMPLE_LIST.map((val) => (
                        <ToggleButton
                            key={val}
                            size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                            name="components"
                            value={val}
                        >
                            {val}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <div className={customStyles.toggleComponentContainer}>
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
                    <FlexBox
                        flexDirection="flex-col"
                        gap="gap-20 under-tablet:gap-10"
                        width="w-full"
                        padding="p-20"
                        borderRadius="rounded"
                        border="border"
                        borderColor="border-primary-600"
                    >
                        <Skeleton height="h-320 under-mobile:h-160" />
                        <FlexBox gap="gap-10">
                            <Skeleton variant="circular" size={isMobile ? 'small' : 'large'} />
                            <Skeleton size={isMobile ? 'small' : 'large'} />
                        </FlexBox>
                    </FlexBox>
                )}
            </div>
        </FlexBox>
    );
}
