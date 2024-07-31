import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IconButton, ToggleButton, ToggleButtonGroup } from '@components/Button';
import Skeleton from '@components/Loader/Skeleton';
import { useAlert } from '@components/useAlert';

import { WarningFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

import Heading from './components/Heading';
import { customStyles } from './components/styles';

const EXAMPLE_LIST = ['Alert', 'Skeleton'];

// Dialog, Progress ...
export default function FeedbackExample() {
    const [searchParams] = useSearchParams();
    const component = searchParams.get('component');

    const { isMobile, isTablet } = useMobile();
    const { handleMessage } = useAlert();

    const [selected, setSelected] = useState(component || EXAMPLE_LIST[0]);

    return (
        <div className="flex flex-col gap-10">
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
                    <div className="flex w-full flex-col gap-10 rounded border border-primary-600 p-20 tablet:gap-20">
                        <Skeleton height="h-320 under-mobile:h-160" />
                        <div className="flex gap-10">
                            <Skeleton variant="circular" size={isMobile ? 'small' : 'large'} />
                            <Skeleton size={isMobile ? 'small' : 'large'} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
