/** @jsxImportSource @emotion/react */

import { TrashIcon, XCircleIcon, PencilIcon } from '@heroicons/react/24/outline';

import { FlexBox, Typography } from 'components/Base';
import IconButton from 'components/Button/IconButton';

import { MonthlyCalenderStyle } from './styles';

type TodoType = {
    idx: number;
    startDate: string;
    endDate: string;
    color: string;
    isAllDay: boolean;
    title: string;
    description: string;
};

type ScheduleDetailType = {
    todo: TodoType;
    day: string;
    isStartDate: boolean;
    handleDeleteSchedule: (index: number) => void;
    handleClickDetail: (type: 'open' | 'close', day: string, index: number) => void;
};

export default function ScheduleDetail(props: ScheduleDetailType) {
    const { todo, day, isStartDate, handleDeleteSchedule, handleClickDetail } = props;

    return (
        <div css={MonthlyCalenderStyle.scheduleDetailWrapper}>
            <FlexBox justifyContent="flex-end">
                <IconButton
                    variant="text"
                    size="medium"
                    shape="circular"
                    onClick={() => handleClickDetail('close', day, -1)}
                    customCSS={{ padding: 0 }}
                >
                    <XCircleIcon width={24} height={24} />
                </IconButton>
            </FlexBox>
            <FlexBox flexDirection="column">
                {!isStartDate && (
                    <Typography component="h3" css={MonthlyCalenderStyle.scheduleDetailTitle}>
                        {todo.title}
                    </Typography>
                )}
                <Typography css={MonthlyCalenderStyle.scheduleDetailDesc}>{todo.description}</Typography>
                <Typography
                    css={MonthlyCalenderStyle.scheduleDetailTerms}
                >{`${todo.startDate} ~ ${todo.endDate}`}</Typography>
            </FlexBox>
            <FlexBox justifyContent="flex-end">
                <IconButton variant="text" size="medium" customCSS={{ padding: 5 }}>
                    <PencilIcon width={24} height={24} />
                </IconButton>
                <IconButton
                    variant="text"
                    size="medium"
                    onClick={() => handleDeleteSchedule(todo.idx)}
                    customCSS={{ padding: 5 }}
                >
                    <TrashIcon width={24} height={24} />
                </IconButton>
            </FlexBox>
        </div>
    );
}
