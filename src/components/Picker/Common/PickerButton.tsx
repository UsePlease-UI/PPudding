import { ReactNode } from 'react';

import dayjs from 'dayjs';

import { CalendarRegular } from '@fluentui/react-icons';

import IconButton from '@components/Button/IconButton';
import { DateType } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

type PickerButtonType = {
    labelText?: string;
    helperText?: string;
    placeholder?: string;
    dateFormat?: string;
    value?: DateType;
    icon?: ReactNode;
    onClick?: () => void;
};

export default function PickerButton(props: PickerButtonType) {
    const { labelText, helperText, placeholder, dateFormat, value, icon, onClick } = props;

    return (
        <>
            {labelText && <p className="ml-1 w-full text-left text-10 font-semibold leading-16">{labelText}</p>}
            <div className="flex w-full min-w-50 cursor-default items-center justify-between overflow-hidden rounded border border-gray-900">
                <p
                    className={joinClassNames(
                        'flex-1 pl-2 text-left text-14 font-medium text-primary-950',
                        !value && placeholder && 'text-gray-400'
                    )}
                >
                    {value ? dayjs(value).format(dateFormat) : placeholder}
                </p>
                <IconButton size="medium" variant="text" onClick={onClick}>
                    {icon || <CalendarRegular />}
                </IconButton>
            </div>
            {helperText && <p className="ml-1 w-full text-left text-10 font-semibold leading-16">{helperText}</p>}
        </>
    );
}
