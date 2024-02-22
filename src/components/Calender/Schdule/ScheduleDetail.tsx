/** @jsxImportSource @emotion/react */

import { useEffect } from 'react';

import { TrashIcon, XCircleIcon, PencilIcon } from '@heroicons/react/24/outline';
import { palette } from 'styles';

import { FlexBox, Typography } from 'components/Base';
import Button from 'components/Button/Button';
import IconButton from 'components/Button/IconButton';
import Select from 'components/Combobox/Select';
import { Checkbox } from 'components/Form/Checkbox';
import TextField from 'components/Form/TextField';
import { useAlert } from 'components/useAlert';
import { useCalender } from 'components/useCalender';
import { type TodoType, useSchedule } from 'components/useSchedule';
import { CALENDER_LABEL_COLOR } from 'pages/Example/Kimyerim1935/constants';

import { MonthlyCalenderStyle } from '../styles';

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
    const { dispatch: calenderDispatch } = useCalender();
    const { setMessage } = useAlert();
    const {
        isAllDay,
        setIsAllDay,
        addContents,
        setAddContents,
        color,
        setColor,
        labelColor,
        initialContent,
        handleContents
    } = useSchedule(todo.color, todo);

    const handleEditSchedule = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (addContents.startDate > addContents.endDate) {
            setMessage('시작일은 종료일보다 클 수 없습니다', { variant: 'error' });
            return;
        }

        calenderDispatch({
            type: 'UPDATE_SCHEDULE',
            payload: {
                ...addContents,
                idx: todo.idx,
                isAllDay,
                color
            }
        });
        handleClickDetail('close', day, -1);
    };

    useEffect(() => {
        setIsAllDay(initialContent.isAllDay);
        setColor(labelColor);
        setAddContents(initialContent);
    }, [isEdited]);

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
                    <form onSubmit={handleEditSchedule}>
                        <TextField
                            helperText="10글자 이내로 입력해주세요."
                            name="title"
                            value={addContents.title}
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
                            helperText="20글자 이내로 입력해주세요."
                            name="description"
                            value={addContents.description}
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
                                value={addContents.startDate}
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
                                value={addContents.endDate}
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
                        <Select
                            labelText="라벨 색상"
                            name="label-color"
                            value={color}
                            label={CALENDER_LABEL_COLOR.filter((val) => val.value === color)?.[0]?.label}
                            options={CALENDER_LABEL_COLOR}
                            onChange={(e) => setColor(e.currentTarget.value)}
                            customCSS={{ color }}
                        />
                        <Checkbox
                            label="종일"
                            value="isAllDay"
                            checked={isAllDay}
                            onChange={() => setIsAllDay((prev) => !prev)}
                            customCSS={{ marginTop: 10 }}
                        />
                        <FlexBox justifyContent="right" gap={5}>
                            <Button onClick={() => setIsEdited(false)} variant="outlined" size="small">
                                취소
                            </Button>
                            <Button type="submit" variant="contained" size="small">
                                수정하기
                            </Button>
                        </FlexBox>
                    </form>
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
