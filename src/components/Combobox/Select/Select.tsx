import { InputHTMLAttributes, MouseEvent, ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react';

import { Backdrop, Box, FormControl, Listbox } from '@components/Base';
import { getVariantStyle } from '@components/Button';
import { CommonListDataType } from '@components/types';
import usePosition from '@components/usePosition';

import { ChevronDownFilled } from '@fluentui/react-icons';
import { joinClassNames } from '@utils/format';

type BaseType = InputHTMLAttributes<HTMLButtonElement>;

type SelectType = BaseType & {
    placeholder?: string;
    label: string;
    value: string | number;
    onChange: (e: MouseEvent<HTMLButtonElement>) => void;
    options?: CommonListDataType[];
    isDisabled?: boolean;
    isReadOnly?: boolean;
    labelText?: string | ReactNode;
    helperText?: string | ReactNode;
};

/**
 *  [UI Component] Select Component
 *  @param label 선택된 값의 label
 *  @param value 선택된 값의 value
 *  @param onChange Change Event Handler
 *  @param options 옵션들 [optional]
 *  @param isReadOnly 읽기 전용 [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param labelText Label Text [optional]
 *  @param helperText Helper Text [optional]
 *  @returns JSX.Element
 */
export default function Select(props: SelectType) {
    const {
        placeholder,
        id,
        label,
        value,
        options = [],
        isDisabled,
        isReadOnly,
        labelText,
        helperText,
        onChange,
        ...rest
    } = props;

    const buttonId = useId();
    const labelId = useId();
    const helperTextId = useId();
    const listBoxId = useId();

    const listContainerRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLButtonElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const position = usePosition({
        inputId: id || buttonId,
        listBoxId,
        isVisible,
        totalLength: options.length
    });

    useEffect(() => {
        const element = listContainerRef.current;
        if (isVisible && element) {
            const { top, left, marginTop, maxWidth } = position;
            element.style.top = `${top}px`;
            element.style.left = `${left}px`;
            element.style.marginTop = `${marginTop}px`;
            const list = element.getElementsByTagName('ul')[0];
            list.style.maxWidth = `${maxWidth}px`;
        }
    }, [isVisible, position]);

    const handleClick = useCallback(() => setIsVisible((prev) => !prev), []);

    return (
        <Box width="w-max">
            <FormControl
                id={rest['aria-labelledby'] || labelId}
                labelText={labelText}
                helperText={helperText}
                helperTextId={rest['aria-describedby'] || helperTextId}
            >
                <div className="group relative">
                    <button
                        id={id || buttonId}
                        ref={ref}
                        type="button"
                        disabled={isDisabled || isReadOnly}
                        aria-expanded={isVisible}
                        aria-controls={listBoxId}
                        aria-haspopup="listbox"
                        aria-describedby={helperText ? rest['aria-describedby'] || helperTextId : undefined}
                        role="combobox"
                        tabIndex={0}
                        onClick={handleClick}
                        className={joinClassNames(
                            getVariantStyle('outlined'),
                            'flex h-40 min-w-120 items-center justify-between rounded pl-12 pr-8 text-black',
                            placeholder && !value && 'text-gray-400'
                        )}
                    >
                        <span className="mr-2.5 flex-1 truncate text-left text-14 font-normal leading-normal text-inherit">
                            {placeholder && !value ? placeholder : label}
                        </span>
                        <span className="h-20 w-20">
                            <ChevronDownFilled
                                width={16}
                                height={16}
                                className={joinClassNames(
                                    '!block h-20 w-20 text-primary-600',
                                    isVisible && 'rotate-180'
                                )}
                            />
                        </span>
                    </button>
                    {isVisible && (
                        <Backdrop isOpen={isVisible} onClose={handleClick}>
                            <div ref={listContainerRef} className="fixed w-full">
                                <Listbox
                                    id={listBoxId}
                                    labelId={rest['aria-labelledby'] || labelId}
                                    value={value}
                                    options={options}
                                    onClick={onChange}
                                />
                            </div>
                        </Backdrop>
                    )}
                </div>
            </FormControl>
        </Box>
    );
}
