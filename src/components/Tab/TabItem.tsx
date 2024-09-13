import { cloneElement, ReactElement, ReactNode } from 'react';

import { useTab } from '@components/useTab';

import { joinClassNames } from '@utils/format';

type TabItemType = {
    index: number;
    value: number;
    icon?: ReactNode;
    label?: ReactNode;
    onChange?: (newValue: number) => void;
};

function a11yProps(index: number, value: number) {
    return {
        id: `tab-${index}`,
        role: 'tab',
        'aria-selected': value === index,
        'aria-controls': `tabpanel-${index}`,
        ...(value !== index && { tabIndex: -1 }),
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
    const { icon, index, label, onChange, value } = props;
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
            className="flex size-full min-h-14 cursor-pointer flex-col items-center justify-center"
            onClick={() => handleClick(index)}
        >
            <div className="flex items-center justify-center">
                {icon && (
                    <span className="my-3 block size-4.5">
                        {cloneElement(icon as ReactElement, {
                            className: joinClassNames('!block h-4.5 w-4.5 text-primary-950'),
                        })}
                    </span>
                )}
                {label &&
                    (typeof label === 'string' ? (
                        <p
                            className={joinClassNames(
                                'mx-1 my-2.25 text-16 font-medium text-primary-950',
                                value === index ? 'font-bold' : 'font-medium',
                            )}
                        >
                            {label}
                        </p>
                    ) : (
                        label
                    ))}
            </div>
            <div
                id={`tab-indicator-${index}`}
                className={joinClassNames(
                    'h-0.5 w-4/5 rounded-full bg-primary-100 transition-all duration-75',
                    value === index ? 'visible' : 'invisible',
                )}
            />
        </button>
    );
}
