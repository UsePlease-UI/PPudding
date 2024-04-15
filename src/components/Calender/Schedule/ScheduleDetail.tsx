import { FormEvent } from 'react';

import { FlexBox, Typography } from '@components/Base';
import { Button, IconButton } from '@components/Button';
import { Select } from '@components/Combobox';
import { Checkbox, TextField } from '@components/Form';
import { useAlert } from '@components/useAlert';
import { useCalender } from '@components/useCalender';
import { type TodoType, useSchedule } from '@components/useSchedule';

import { DeleteFilled, DismissFilled, EditFilled } from '@fluentui/react-icons';

import { CALENDER_LABEL_COLOR } from '../constants';

type ScheduleDetailType = {
    todo: TodoType;
    day: string;
    isStartDate: boolean;
    isEdited: boolean;
    onEdit: (isEdited: boolean) => void;
    onScheduleDelete: (index: string) => void;
    onDetailClick: (type: 'open' | 'close', day: string, index: number) => void;
};

export default function ScheduleDetail(props: ScheduleDetailType) {
    const { todo, day, isStartDate, isEdited, onEdit, onScheduleDelete, onDetailClick } = props;
    const { handleMessage } = useAlert();

    const { handleCalendar } = useCalender();
    const { isAllDay, handleDayChange, addContents, color, handleColorChange, handleContents } = useSchedule(
        todo.color,
        todo
    );

    const handleEditSchedule = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (addContents.startDate > addContents.endDate) {
            handleMessage('시작일은 종료일보다 클 수 없습니다', { variant: 'error' });
            return;
        }

        handleCalendar({
            type: 'UPDATE_SCHEDULE',
            payload: { ...addContents, idx: todo.idx, isAllDay, color }
        });
        onDetailClick('close', day, -1);
    };

    return (
        <div className="relative">
            <FlexBox flexDirection="flex-col">
                <div className="absolute right-0 top-0">
                    <IconButton
                        variant="text"
                        size="small"
                        shape="circular"
                        onClick={() => onDetailClick('close', day, -1)}
                    >
                        <DismissFilled />
                    </IconButton>
                </div>
                {isEdited ? (
                    <form onSubmit={handleEditSchedule} className="mt-35 space-y-10 px-10 pb-10">
                        <TextField
                            helperText="10글자 이내로 입력해주세요."
                            name="title"
                            value={addContents.title}
                            required
                            isFullWidth
                            maxLength={10}
                            onChange={(e) => handleContents('title', e.target.value)}
                        />
                        <TextField
                            helperText="20글자 이내로 입력해주세요."
                            name="description"
                            value={addContents.description}
                            required
                            isFullWidth
                            maxLength={20}
                            onChange={(e) => handleContents('description', e.target.value)}
                        />
                        <FlexBox flexDirection="flex-col" gap="gap-10">
                            <TextField
                                labelText="시작일"
                                type="date"
                                name="startDate"
                                isFullWidth
                                value={addContents.startDate}
                                onChange={(e) => handleContents('startDate', e.target.value)}
                            />
                            <TextField
                                labelText="종료일"
                                type="date"
                                name="endDate"
                                isFullWidth
                                value={addContents.endDate}
                                onChange={(e) => handleContents('endDate', e.target.value)}
                            />
                        </FlexBox>
                        <Select
                            labelText="라벨 색상"
                            name="label-color"
                            value={color}
                            label={CALENDER_LABEL_COLOR.filter((val) => val.value === color)?.[0]?.label}
                            options={CALENDER_LABEL_COLOR}
                            onChange={(e) => handleColorChange(e.currentTarget.value)}
                        />
                        <Checkbox label="종일" value="isAllDay" checked={isAllDay} onChange={handleDayChange} />
                        <FlexBox justifyContent="justify-end" gap="gap-5">
                            <Button onClick={() => onEdit(false)} variant="outlined" size="small">
                                취소
                            </Button>
                            <Button type="submit" variant="contained" size="small">
                                수정
                            </Button>
                        </FlexBox>
                    </form>
                ) : (
                    <div className="mt-35 px-10">
                        <FlexBox flexDirection="flex-col">
                            {!isStartDate && (
                                <Typography
                                    component="h3"
                                    fontSize="text-18"
                                    fontWeight="font-semibold"
                                    color="text-gray-950"
                                >
                                    {todo.title}
                                </Typography>
                            )}
                            <Typography fontSize="text-16" color="text-gray-950">
                                {todo.description}
                            </Typography>
                            <Typography
                                fontSize="text-13"
                                color="text-gray-950"
                            >{`${todo.startDate} ~ ${todo.endDate}`}</Typography>
                        </FlexBox>
                        <FlexBox justifyContent="justify-end" margin="mt-20">
                            <IconButton variant="text" size="small" onClick={() => onEdit(true)}>
                                <EditFilled />
                            </IconButton>
                            <IconButton variant="text" size="small" onClick={() => onScheduleDelete(todo.idx)}>
                                <DeleteFilled />
                            </IconButton>
                        </FlexBox>
                    </div>
                )}
            </FlexBox>
        </div>
    );
}
