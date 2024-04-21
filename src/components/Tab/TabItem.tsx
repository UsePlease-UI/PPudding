import { ReactElement, ReactNode, cloneElement } from 'react';

import { FlexBox } from '@components/Base';
import { useTab } from '@components/useTab';

import { joinClassNames } from '@utils/format';

type TabItemType = {
    value: number;
    index: number;
    label?: ReactNode;
    icon?: ReactNode;
    onChange?: (newValue: number) => void;
};

function a11yProps(index: number, value: number) {
    return {
        id: `tab-${index}`,
        role: 'tab',
        'aria-selected': value === index,
        'aria-controls': `tabpanel-${index}`,
        ...(value !== index && { tabIndex: -1 })
    };
}

/**
 *  [UI Component] Tab Item Component
 *  @param value 선택된 탭 인덱스
 *  @param index 탭 인덱스
 *  @param label 탭 Text [optional]
 *  @param icon 아이콘 [optional]
 *  @returns JSX.Element
 */
export default function TabItem(props: TabItemType) {
    const { label, value, index, icon, onChange } = props;
    const { linkRefs } = useTab();

    const handleClick = (newValue: number) => {
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <button
            type="button"
            {...a11yProps(index, value)}
            ref={linkRefs[index - 1]}
            onClick={() => handleClick(index)}
            className="flex h-full min-h-56 w-full cursor-pointer flex-col items-center justify-center"
        >
            <FlexBox alignItems="items-center" justifyContent="justify-center">
                {icon && (
                    <span className="my-12 block h-18 w-18">
                        {cloneElement(icon as ReactElement, { className: '!block w-18 h-18 text-primary-50' })}
                    </span>
                )}
                {label &&
                    (typeof label === 'string' ? (
                        <p
                            className={joinClassNames(
                                'mx-4 my-9 text-16 font-medium text-primary-50',
                                value === index ? 'font-bold' : 'font-medium'
                            )}
                        >
                            {label}
                        </p>
                    ) : (
                        label
                    ))}
            </FlexBox>
            <div
                id={`tab-indicator-${index}`}
                className={joinClassNames(
                    'h-2 w-4/5 rounded-full bg-primary-100 transition-all duration-75',
                    value === index ? 'visible' : 'invisible'
                )}
            />
        </button>
    );
}
