import { FormEvent } from 'react';

import { DeleteFilled, DismissFilled, EditFilled } from '@fluentui/react-icons';

import { Button, IconButton } from '@components/Button';
import { Select } from '@components/Combobox';
import { Checkbox, TextField } from '@components/Form';
import { useAlert } from '@components/useAlert';
import { useCalender } from '@components/useCalender';
import { TodoType, useSchedule } from '@components/useSchedule';

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
    const { onAlert } = useAlert();

    const { handleCalendar } = useCalender();
    const { isAllDay, handleDayChange, addContents, color, handleColorChange, handleContents } = useSchedule(
        todo.color,
        todo
    );

    const handleEditSchedule = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (addContents.startDate > addContents.endDate) {
            onAlert('시작일은 종료일보다 클 수 없습니다', { variant: 'error' });
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
                <form onSubmit={handleEditSchedule} className="mt-8.75 space-y-2.5 px-2.5 pb-2.5">
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
                    <div className="flex flex-col gap-2.5">
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
                    </div>
                    <Select
                        labelText="라벨 색상"
                        name="label-color"
                        value={color}
                        label={CALENDER_LABEL_COLOR.filter((val) => val.value === color)?.[0]?.label}
                        options={CALENDER_LABEL_COLOR}
                        onChange={(e) => handleColorChange(e.currentTarget.value)}
                    />
                    <Checkbox label="종일" value="isAllDay" checked={isAllDay} onChange={handleDayChange} />
                    <div className="flex items-center justify-end gap-1.25">
                        <Button onClick={() => onEdit(false)} variant="outlined" size="small">
                            취소
                        </Button>
                        <Button type="submit" variant="contained" size="small">
                            수정
                        </Button>
                    </div>
                </form>
            ) : (
                <div className="min-w-62.5">
                    <div className="flex flex-col">
                        {!isStartDate && (
                            <h3 className="mb-2.5 mr-11.25 mt-1.25 text-18 font-semibold text-gray-950">
                                {todo.title}
                            </h3>
                        )}
                        <p className="text-16 text-gray-950">{todo.description}</p>
                        <p className="text-13 text-gray-950">{`${todo.startDate} ~ ${todo.endDate}`}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-end">
                        <IconButton variant="text" size="small" onClick={() => onEdit(true)}>
                            <EditFilled className="text-primary-800" />
                        </IconButton>
                        <IconButton variant="text" size="small" onClick={() => onScheduleDelete(todo.idx)}>
                            <DeleteFilled className="text-red-600" />
                        </IconButton>
                    </div>
                </div>
            )}
        </div>
    );
}
