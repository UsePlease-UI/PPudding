import { FormEvent, MouseEvent } from 'react';

import { v4 as uuid } from 'uuid';

import Button from '@components/Button/Button';
import Select from '@components/Combobox/Select';
import { Checkbox, TextField } from '@components/Form';
import { useAlert } from '@components/useAlert';
import { useCalender } from '@components/useCalender';
import { useSchedule } from '@components/useSchedule';

import useMobile from '@hooks/useMobile';
import { joinClassNames } from '@utils/format';

import { CALENDER_LABEL_COLOR, INITIAL_CONTENTS } from '../constants';

type AddScheduleType = {
    onClose: () => void;
    onCancel: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function AddSchedule({ onClose, onCancel }: AddScheduleType) {
    const { isTablet } = useMobile();
    const { onAlert } = useAlert();

    const { handleCalendar } = useCalender();
    const { isAllDay, handleDayChange, addContents, color, handleColorChange, handleContents } = useSchedule(
        CALENDER_LABEL_COLOR[0].value,
        INITIAL_CONTENTS
    );

    const handleAddEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (addContents === INITIAL_CONTENTS) {
            return;
        }
        if (addContents.startDate > addContents.endDate) {
            onAlert('시작일은 종료일보다 클 수 없습니다', { variant: 'error' });
            return;
        }

        handleCalendar({
            type: 'ADD_SCHEDULE',
            payload: { ...addContents, idx: uuid(), isAllDay, color }
        });
        onClose();
    };

    return (
        <form
            onSubmit={handleAddEvent}
            className={joinClassNames('h-full w-75 overflow-y-auto bg-white p-5', isTablet && 'h-[50vh] w-full')}
        >
            <div className="flex w-full flex-col gap-5">
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
                <Checkbox size="medium" label="종일" value="isAllDay" checked={isAllDay} onChange={handleDayChange} />
                <Select
                    labelText="라벨 색상"
                    name="label-color"
                    value={color}
                    label={CALENDER_LABEL_COLOR.filter((val) => val.value === color)?.[0]?.label}
                    options={CALENDER_LABEL_COLOR}
                    onChange={(e) => handleColorChange(e.currentTarget.value)}
                />
                <TextField
                    labelText="일정 제목"
                    helperText="10글자 이내로 입력해주세요."
                    name="title"
                    value={addContents.title}
                    required
                    isFullWidth
                    maxLength={10}
                    onChange={(e) => handleContents('title', e.target.value)}
                />
                <TextField
                    labelText="상세 내용"
                    helperText="20글자 이내로 입력해주세요."
                    name="description"
                    value={addContents.description}
                    required
                    isFullWidth
                    maxLength={20}
                    onChange={(e) => handleContents('description', e.target.value)}
                />
            </div>
            <div className="mt-5 flex items-center justify-end gap-2.5">
                <Button size="small" variant="outlined" onClick={onCancel}>
                    취소
                </Button>
                <Button type="submit" size="small" variant="contained">
                    추가
                </Button>
            </div>
        </form>
    );
}
