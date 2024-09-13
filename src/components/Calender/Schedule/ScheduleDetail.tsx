import { FormEvent } from 'react';

import { DeleteFilled, DismissFilled, EditFilled } from '@fluentui/react-icons';

import Button from '@components/Button/Button';
import IconButton from '@components/Button/IconButton';
import Select from '@components/Combobox/Select';
import { Checkbox } from '@components/Form/Checkbox';
import TextField from '@components/Form/TextField';
import { useAlert } from '@components/useAlert';
import { useCalender } from '@components/useCalender';
import { TodoType, useSchedule } from '@components/useSchedule';

import { CALENDER_LABEL_COLOR } from '../constants';

type ScheduleDetailType = {
  day: string;
  isEdited: boolean;
  isStartDate: boolean;
  todo: TodoType;
  onDetailClick: (type: 'close' | 'open', day: string, index: number) => void;
  onEdit: (isEdited: boolean) => void;
  onScheduleDelete: (index: string) => void;
};

export default function ScheduleDetail(props: ScheduleDetailType) {
  const { day, isEdited, isStartDate, onDetailClick, onEdit, onScheduleDelete, todo } = props;
  const { onAlert } = useAlert();

  const { handleCalendar } = useCalender();
  const { addContents, color, handleColorChange, handleContents, handleDayChange, isAllDay } = useSchedule(
    todo.color,
    todo,
  );

  const handleEditSchedule = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addContents.startDate > addContents.endDate) {
      onAlert('시작일은 종료일보다 클 수 없습니다', { variant: 'error' });
      return;
    }

    handleCalendar({
      type: 'UPDATE_SCHEDULE',
      payload: { ...addContents, idx: todo.idx, isAllDay, color },
    });
    onDetailClick('close', day, -1);
  };

  return (
    <div className="relative">
      <div className="absolute right-0 top-0">
        <IconButton shape="circular" size="small" variant="text" onClick={() => onDetailClick('close', day, -1)}>
          <DismissFilled />
        </IconButton>
      </div>
      {isEdited ? (
        <form className="mt-8.75 space-y-2.5 px-2.5 pb-2.5" onSubmit={handleEditSchedule}>
          <TextField
            isFullWidth
            required
            helperText="10글자 이내로 입력해주세요."
            maxLength={10}
            name="title"
            value={addContents.title}
            onChange={(e) => handleContents('title', e.target.value)}
          />
          <TextField
            isFullWidth
            required
            helperText="20글자 이내로 입력해주세요."
            maxLength={20}
            name="description"
            value={addContents.description}
            onChange={(e) => handleContents('description', e.target.value)}
          />
          <div className="flex flex-col gap-2.5">
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
          </div>
          <Select
            label={CALENDER_LABEL_COLOR.filter((val) => val.value === color)?.[0]?.label}
            labelText="라벨 색상"
            name="label-color"
            options={CALENDER_LABEL_COLOR}
            value={color}
            onChange={(e) => handleColorChange(e.currentTarget.value)}
          />
          <Checkbox checked={isAllDay} label="종일" value="isAllDay" onChange={handleDayChange} />
          <div className="flex items-center justify-end gap-1.25">
            <Button size="small" variant="outlined" onClick={() => onEdit(false)}>
              취소
            </Button>
            <Button size="small" type="submit" variant="contained">
              수정
            </Button>
          </div>
        </form>
      ) : (
        <div className="min-w-62.5">
          <div className="flex flex-col">
            {!isStartDate && (
              <h3 className="mb-2.5 mr-11.25 mt-1.25 text-18 font-semibold text-gray-950">{todo.title}</h3>
            )}
            <p className="text-16 text-gray-950">{todo.description}</p>
            <p className="text-13 text-gray-950">{`${todo.startDate} ~ ${todo.endDate}`}</p>
          </div>
          <div className="mt-5 flex items-center justify-end">
            <IconButton size="small" variant="text" onClick={() => onEdit(true)}>
              <EditFilled className="text-primary-800" />
            </IconButton>
            <IconButton size="small" variant="text" onClick={() => onScheduleDelete(todo.idx)}>
              <DeleteFilled className="text-red-600" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}
