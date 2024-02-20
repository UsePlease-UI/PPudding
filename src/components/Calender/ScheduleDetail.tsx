/** @jsxImportSource @emotion/react */

import { useState } from 'react';

import dayjs from 'dayjs';

import { TrashIcon, XCircleIcon, PencilIcon } from '@heroicons/react/24/outline';
import { palette } from 'styles';

import { FlexBox, Typography } from 'components/Base';
import Button from 'components/Button/Button';
import IconButton from 'components/Button/IconButton';
import { initialContent } from 'components/Calender/constants';
import { Checkbox } from 'components/Form/Checkbox';
import TextField from 'components/Form/TextField';

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
    isEdited: boolean;
    setIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
    handleDeleteSchedule: (index: number) => void;
    handleClickDetail: (type: 'open' | 'close', day: string, index: number) => void;
};

export default function ScheduleDetail(props: ScheduleDetailType) {
    const { todo, day, isStartDate, isEdited, setIsEdited, handleDeleteSchedule, handleClickDetail } = props;

    const [isAllDay, setIsAllDay] = useState(false);
    const [addContents, setAddContents] = useState(initialContent);

    const handleContents = (type: string, value: string) => {
        if (type === 'startDate' || type === 'endDate') {
            setAddContents((prev) => ({
                ...prev,
                [type]: dayjs(value)
            }));
        }
        setAddContents((prev) => ({
            ...prev,
            [type]: value
        }));
    };
    const handleEditSchedule = () => {
        return null;
    };

    return (
        <div css={MonthlyCalenderStyle.scheduleDetailWrapper}>
            <FlexBox flexDirection="column" gap={5}>
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
                {isEdited ? (
                    <>
                        <TextField
                            labelText="일정 제목"
                            helperText="10글자 이내로 입력해주세요."
                            name="title"
                            value={todo.title}
                            required
                            isFullWidth
                            maxLength={10}
                            onChange={(e) => handleContents('title', e.target.value)}
                            customCSS={{
                                borderColor: palette.secondary[600],
                                '@media (max-width: 425px)': {
                                    minWidth: 0,
                                    width: '100%'
                                }
                            }}
                        />
                        <TextField
                            labelText="상세 내용"
                            helperText="20글자 이내로 입력해주세요."
                            name="description"
                            value={todo.description}
                            required
                            isFullWidth
                            maxLength={20}
                            onChange={(e) => handleContents('description', e.target.value)}
                            customCSS={{
                                borderColor: palette.secondary[600],
                                '@media (max-width: 425px)': {
                                    minWidth: 0,
                                    width: '100%'
                                }
                            }}
                        />
                        <FlexBox gap={10}>
                            <TextField
                                labelText="시작일"
                                type="date"
                                name="startDate"
                                isFullWidth
                                value={todo.startDate}
                                onChange={(e) => handleContents('startDate', e.target.value)}
                                customCSS={{
                                    borderColor: palette.secondary[600],
                                    '@media (max-width: 425px)': {
                                        minWidth: 0,
                                        width: '100%'
                                    }
                                }}
                            />
                            <TextField
                                labelText="종료일"
                                type="date"
                                name="endDate"
                                isFullWidth
                                value={todo.endDate}
                                onChange={(e) => handleContents('endDate', e.target.value)}
                                customCSS={{
                                    borderColor: palette.secondary[600],
                                    '@media (max-width: 425px)': {
                                        minWidth: 0,
                                        width: '100%'
                                    }
                                }}
                            />
                        </FlexBox>
                        <Checkbox
                            label="종일"
                            value="isAllDay"
                            checked={todo.isAllDay}
                            onChange={() => setIsAllDay((prev) => !prev)}
                            customCSS={{ marginTop: 10 }}
                        />
                        <FlexBox justifyContent="right" gap={5}>
                            <Button onClick={() => setIsEdited(false)} variant="outlined" size="small">
                                취소
                            </Button>
                            <Button onClick={() => handleEditSchedule()} variant="contained" size="small">
                                수정하기
                            </Button>
                        </FlexBox>
                    </>
                ) : (
                    <>
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
                            <IconButton
                                variant="text"
                                size="medium"
                                onClick={() => setIsEdited(true)}
                                customCSS={{ padding: 5 }}
                            >
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
                    </>
                )}
            </FlexBox>
        </div>
    );
}
