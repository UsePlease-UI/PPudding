import { useState } from 'react';

import dayjs from 'dayjs';

import { palette } from 'styles';

import { FlexBox } from 'components/Base';
import Button from 'components/Button/Button';
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
    length: number;
};

export default function AddSchedule({ setIsOpenAddForm, setAddArr, length }: AddScheduleType) {
    const [color, setColor] = useState('red');
    const today = new Date().toISOString().substring(0, 10);
    const [addContents, setAddContents] = useState({
        idx: 0,
        startDate: today,
        endDate: today,
        isAllDay: false,
        color: '',
        title: '',
        description: ''
    });
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
    const handleAddEvent = () => {
        setIsOpenAddForm((prev) => !prev);
        setAddArr((prev) => [
            ...prev,
            {
                ...addContents,
                idx: length + 1,
                isAllDay,
                color
            }
        ]);
    };

    return (
        <div style={{ background: 'white', padding: 20 }}>
            <FlexBox flexDirection="column" gap={20}>
                <TextField
                    labelText="시작일"
                    type="date"
                    name="startDate"
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
                />

                <TextField
                    labelText="일정 제목"
                    name="title"
                    value={addContents.title}
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
                    name="description"
                    value={addContents.description}
                    maxLength={10}
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
            <Button size="small" variant="outlined" onClick={() => handleAddEvent()} customCSS={{ marginTop: 20 }}>
                추가하기
            </Button>
        </div>
    );
}
