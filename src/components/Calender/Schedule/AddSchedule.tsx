import { FormEvent, MouseEvent } from 'react';

import { v4 as uuid } from 'uuid';

import Button from '@components/Button/Button';
import Select from '@components/Combobox/Select';
import { Checkbox } from '@components/Form/Checkbox';
import TextField from '@components/Form/TextField';
import { useAlert } from '@components/useAlert';
import { useCalender } from '@components/useCalender';
import { useSchedule } from '@components/useSchedule';

import useMobile from '@hooks/useMobile';
import { joinClassNames } from '@utils/format';

import { CALENDER_LABEL_COLOR, INITIAL_CONTENTS } from '../constants';

type AddScheduleType = {
    onCancel: (e: MouseEvent<HTMLButtonElement>) => void;
    onClose: () => void;
};

export default function AddSchedule({ onCancel, onClose }: AddScheduleType) {
    const { isTablet } = useMobile();
    const { onAlert } = useAlert();

    const { handleCalendar } = useCalender();
    const { addContents, color, handleColorChange, handleContents, handleDayChange, isAllDay } = useSchedule(
        CALENDER_LABEL_COLOR[0].value,
        INITIAL_CONTENTS,
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
            payload: { ...addContents, idx: uuid(), isAllDay, color },
        });
        onClose();
    };

    return (
        <form
            className={joinClassNames('h-full w-75 overflow-y-auto bg-white p-5', isTablet && 'h-[50vh] w-full')}
            onSubmit={handleAddEvent}
        >
            <div className="flex w-full flex-col gap-5">
                <TextField
                    isFullWidth
                    labelText="시작일"
                    name="startDate"
                    type="date"
                    value={addContents.startDate}
                    onChange={(e) => handleContents('startDate', e.target.value)}
                />
                <TextField
                    isFullWidth
                    labelText="종료일"
                    name="endDate"
                    type="date"
                    value={addContents.endDate}
                    onChange={(e) => handleContents('endDate', e.target.value)}
                />
                <Checkbox checked={isAllDay} label="종일" size="medium" value="isAllDay" onChange={handleDayChange} />
                <Select
                    label={CALENDER_LABEL_COLOR.filter((val) => val.value === color)?.[0]?.label}
                    labelText="라벨 색상"
                    name="label-color"
                    options={CALENDER_LABEL_COLOR}
                    value={color}
                    onChange={(e) => handleColorChange(e.currentTarget.value)}
                />
                <TextField
                    isFullWidth
                    required
                    helperText="10글자 이내로 입력해주세요."
                    labelText="일정 제목"
                    maxLength={10}
                    name="title"
                    value={addContents.title}
                    onChange={(e) => handleContents('title', e.target.value)}
                />
                <TextField
                    isFullWidth
                    required
                    helperText="20글자 이내로 입력해주세요."
                    labelText="상세 내용"
                    maxLength={20}
                    name="description"
                    value={addContents.description}
                    onChange={(e) => handleContents('description', e.target.value)}
                />
            </div>
            <div className="mt-5 flex items-center justify-end gap-2.5">
                <Button size="small" variant="outlined" onClick={onCancel}>
                    취소
                </Button>
                <Button size="small" type="submit" variant="contained">
                    추가
                </Button>
            </div>
        </form>
    );
}
