/** @jsxImportSource @emotion/react */
import dayjs from 'dayjs';

import { TrashIcon, XCircleIcon, PencilIcon } from '@heroicons/react/24/outline';

import { FlexBox, Typography } from 'components/Base';
import Button from 'components/Button/Button';

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
                <Button onClick={() => handleClickDetail('close', day, -1)} customCSS={{ width: 24, height: 24 }}>
                    <XCircleIcon />
                </Button>
            </FlexBox>
            <FlexBox flexDirection="column">
                {!isStartDate && (
                    <Typography component="h3" css={MonthlyCalenderStyle.scheduleDetailTitle}>
                        {todo.title}
                    </Typography>
                )}
                <Typography css={MonthlyCalenderStyle.scheduleDetailDesc}>{todo.description}</Typography>
                <Typography>{`${todo.startDate} ~ ${dayjs(todo.endDate).date()}`}</Typography>
            </FlexBox>
            <FlexBox justifyContent="flex-end">
                <Button customCSS={{ width: 24, height: 24 }}>
                    <PencilIcon />
                </Button>
                <Button
                    type="button"
                    onClick={() => handleDeleteSchedule(todo.idx)}
                    customCSS={{ width: 24, height: 24 }}
                >
                    <TrashIcon />
                </Button>
            </FlexBox>
        </div>
    );
}
