import { cloneElement, forwardRef, InputHTMLAttributes, ReactElement, ReactNode, useId } from 'react';

import { CheckmarkFilled } from '@fluentui/react-icons';

import { joinClassNames } from '@utils/format';

import { getSizeStyle, PositionType, SizeType } from './styles';

type BaseType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'className'>;

type CheckboxType = BaseType & {
    label: ReactNode;
    checkedIcon?: ReactNode;
    icon?: ReactNode;
    isDisabled?: boolean;
    labelMargin?: string;
    position?: PositionType;
    size?: SizeType;
};

/**
 *  [UI Component] Checkbox Component
 *  @param label Checkbox Label
 *  @param isDisabled Is Disabled? [optional]
 *  @param position Position of Label Text (Is it before or after checkbox)?
 *  @param icon Checkbox Custom Icon [optional]
 *  @param checkedIcon Checkbox Custom Checked Icon [optional]
 *  @param size [CSS] Checkbox Size Style (small | medium | large)
 *  @param labelMargin [CSS] Margin value for label
 *  @returns JSX.Element
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(function Checkbox(
    {
        label,
        position = 'end',
        size = 'medium',
        labelMargin = position === 'start' ? 'mr-5' : 'ml-5',
        isDisabled,
        icon,
        checkedIcon,
        onChange,
        ...props
    }: CheckboxType,
    ref,
) {
    const labelId = useId();
    return (
        <label
            htmlFor={labelId}
            className={joinClassNames(
                'group inline-flex w-max cursor-pointer items-center',
                isDisabled && 'pointer-events-none',
                typeof label !== 'string' && 'w-full',
            )}
        >
            {position === 'start' &&
                (typeof label === 'string' ? (
                    <span
                        className={joinClassNames(
                            'font-medium leading-normal',
                            getSizeStyle(size).text,
                            isDisabled && 'text-gray-400',
                        )}
                    >
                        {label}
                    </span>
                ) : (
                    <div className={joinClassNames('w-full', labelMargin)}>{label}</div>
                ))}
            <span
                className={joinClassNames(
                    size === 'small' && 'p-0.5',
                    size === 'medium' && 'p-0.75',
                    size === 'large' && 'p-1',
                    'inline-flex items-center group-focus-within:rounded group-focus-within:bg-yellow-gray-100 group-hover:rounded group-hover:bg-yellow-gray-50',
                )}
            >
                <input
                    {...props}
                    ref={ref}
                    className="peer sr-only"
                    disabled={isDisabled}
                    id={labelId}
                    type="checkbox"
                    onClick={(e) => e.currentTarget.blur()}
                    onChange={(e) => {
                        e.currentTarget.blur();
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                />
                {checkedIcon ? (
                    <span
                        className={joinClassNames(
                            'hidden items-center justify-center peer-checked:inline-flex',
                            getSizeStyle(size).custom,
                        )}
                    >
                        {cloneElement(checkedIcon as ReactElement, {
                            className: joinClassNames(isDisabled ? 'text-gray-400' : 'text-primary-600'),
                        })}
                    </span>
                ) : (
                    <span
                        className={joinClassNames(
                            'hidden items-center justify-center rounded bg-primary-600 peer-checked:inline-flex',
                            getSizeStyle(size).default,
                            isDisabled && 'border-2 border-gray-400 bg-gray-400',
                        )}
                    >
                        <CheckmarkFilled className={joinClassNames('text-white', isDisabled && 'text-white')} />
                    </span>
                )}
                {icon ? (
                    <span
                        className={joinClassNames(
                            'inline-flex items-center justify-center peer-checked:hidden',
                            getSizeStyle(size).custom,
                        )}
                    >
                        {cloneElement(icon as ReactElement, {
                            className: joinClassNames('text-primary-600', isDisabled && 'text-gray-400'),
                        })}
                    </span>
                ) : (
                    <span
                        className={joinClassNames(
                            'inline-block rounded border-2 border-primary-600 bg-white peer-checked:hidden',
                            getSizeStyle(size).default,
                            isDisabled && 'border-gray-400',
                        )}
                    />
                )}
            </span>
            {position === 'end' &&
                (typeof label === 'string' ? (
                    <span
                        className={joinClassNames(
                            'font-medium leading-normal',
                            getSizeStyle(size).text,
                            isDisabled && 'text-gray-400',
                        )}
                    >
                        {label}
                    </span>
                ) : (
                    <div className={joinClassNames('w-full', labelMargin)}>{label}</div>
                ))}
        </label>
    );
});

export default Checkbox;
