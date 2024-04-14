import { InputHTMLAttributes, forwardRef, useId } from 'react';

import { joinClassNames } from '@utils/format';

import { SizeType, getSizeStyle } from './styles';

type BaseType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

type RadioType = BaseType & {
    label: string;
    name: string;
    value: string;
    isDisabled?: boolean;
    size?: SizeType;
    currentValue?: string;
};

/**
 *  [UI Component] Radio Component
 *  @param name 라디오 버튼 이름
 *  @param label 라디오 텍스트 값
 *  @param value 라디오 버튼 값
 *  @param size [CSS] 라디오 크기 (small | medium | large)
 *  @returns JSX.Element
 */
const Radio = forwardRef<HTMLInputElement, RadioType>(function Radio(
    { name, label, value, size = 'medium', isDisabled, currentValue, onChange, ...props },
    ref
) {
    const id = useId();

    return (
        <label
            htmlFor={id}
            className={joinClassNames(
                'group inline-flex w-max cursor-pointer items-center',
                isDisabled && 'pointer-events-none'
            )}
        >
            <span
                className={joinClassNames(
                    getSizeStyle(size).container,
                    'inline-flex items-center group-focus-within:rounded-full group-focus-within:bg-blue-gray-100 group-hover:rounded-full group-hover:bg-blue-gray-50'
                )}
            >
                <input
                    {...props}
                    id={id}
                    ref={ref}
                    type="radio"
                    disabled={isDisabled}
                    name={name}
                    value={value}
                    checked={value !== undefined ? value === currentValue : undefined}
                    onChange={(e) => {
                        e.currentTarget.blur();
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    onClick={(e) => e.currentTarget.blur()}
                    className="peer sr-only"
                />
                <span
                    className={joinClassNames(
                        'hidden items-center justify-center rounded-full border-2 border-primary-600 bg-white peer-checked:inline-flex',
                        getSizeStyle(size).default,
                        isDisabled && 'border-gray-400'
                    )}
                >
                    <span
                        className={joinClassNames('block rounded-full bg-primary-600', isDisabled && 'bg-gray-400')}
                    />
                </span>
                <span
                    className={joinClassNames(
                        'block rounded-full border-2 border-primary-600 bg-white peer-checked:hidden',
                        getSizeStyle(size).default,
                        isDisabled && 'border-gray-400'
                    )}
                />
            </span>
            <span
                className={joinClassNames(
                    'font-medium leading-normal',
                    getSizeStyle(size).text,
                    isDisabled && 'text-gray-400'
                )}
            >
                {label}
            </span>
        </label>
    );
});

export default Radio;
