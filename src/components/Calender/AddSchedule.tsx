/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import dayjs from 'dayjs';

import { palette } from 'styles';

import { FlexBox } from 'components/Base';
import Button from 'components/Button/Button';
import { MonthlyCalenderStyle } from 'components/Calender/styles';
import Select from 'components/Combobox/Select';
import { Checkbox } from 'components/Form/Checkbox';
import TextField from 'components/Form/TextField';
import { CALENDER_LABEL_COLOR } from 'pages/Home/examples/constants';

type addFormType = {
    idx: number;
    startDate: string;
    endDate: string;
    title: string;
    description: string;
};

type addSelectType = {
    color: string;
    isAllDay: boolean;
};

type TodoType = addFormType & addSelectType;

type AddScheduleType = {
    setIsOpenAddForm: React.Dispatch<React.SetStateAction<boolean>>;
    setAddArr: React.Dispatch<React.SetStateAction<TodoType[]>>;
    handleCancel: () => void;
    length: number;
};

const today = new Date().toISOString().substring(0, 10);
const initialContent = {
    idx: 0,
    startDate: today,
    endDate: today,
    isAllDay: false,
    color: '',
    title: '',
    description: ''
};
export default function AddSchedule({ setIsOpenAddForm, setAddArr, length, handleCancel }: AddScheduleType) {
    const [color, setColor] = useState(palette.pastel['01']);
    const [addContents, setAddContents] = useState(initialContent);
    const [isAllDay, setIsAllDay] = useState(false);
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
    const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (addContents === initialContent) {
            return;
        }
        if (addContents.startDate > addContents.endDate) {
            // eslint-disable-next-line no-alert
            window.alert('시작일은 종료일보다 클 수 없습니다');
            return;
        }

        setAddArr((prev) => [
            ...prev,
            {
                ...addContents,
                idx: length + 1,
                isAllDay,
                color
            }
        ]);
        setIsOpenAddForm((prev) => !prev);
    };

    return (
        <form onSubmit={handleAddEvent} css={MonthlyCalenderStyle.form}>
            <FlexBox flexDirection="column" gap={20} customCSS={{ width: '100%' }}>
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
                <Checkbox
                    label="종일"
                    value="isAllDay"
                    checked={isAllDay}
                    onChange={() => setIsAllDay((prev) => !prev)}
                />
                <Select
                    labelText="라벨 색상"
                    name="label-color"
                    value={color}
                    label={CALENDER_LABEL_COLOR.filter((val) => val.value === color)?.[0]?.label}
                    options={CALENDER_LABEL_COLOR}
                    onChange={(e) => setColor(e.currentTarget.value)}
                    customCSS={{ color }}
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
            </FlexBox>
            <FlexBox gap={10}>
                <Button type="submit" size="small" variant="contained" customCSS={{ marginTop: 20 }}>
                    추가하기
                </Button>
                <Button size="small" variant="outlined" customCSS={{ marginTop: 20 }} onClick={() => handleCancel()}>
                    취소
                </Button>
            </FlexBox>
        </form>
    );
}
