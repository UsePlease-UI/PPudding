/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { palette } from 'styles';

import { FlexBox } from 'components/Base';
import Button from 'components/Button/Button';
import { initialContent } from 'components/Calender/constants';
import { MonthlyCalenderStyle } from 'components/Calender/styles';
import Select from 'components/Combobox/Select';
import { Checkbox } from 'components/Form/Checkbox';
import TextField from 'components/Form/TextField';
import { useAlert } from 'components/useAlert';
import { useCalender } from 'components/useCalender';
import { useSchedule } from 'components/useSchedule';
import useMobile from 'hooks/useMobile';
import { CALENDER_LABEL_COLOR } from 'pages/Example/Kimyerim1935/constants';

type AddScheduleType = {
    setIsOpenAddForm: React.Dispatch<React.SetStateAction<boolean>>;
    handleCancel: () => void;
    length: number;
};

export default function AddSchedule({ setIsOpenAddForm, length, handleCancel }: AddScheduleType) {
    const isMobile = useMobile();
    const { dispatch: calenderDispatch } = useCalender();
    const { setMessage } = useAlert();
    const { isAllDay, setIsAllDay, addContents, color, setColor, handleContents } = useSchedule(
        palette.pastel['01'],
        initialContent
    );

    const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (addContents === initialContent) {
            return;
        }
        if (addContents.startDate > addContents.endDate) {
            setMessage('시작일은 종료일보다 클 수 없습니다', { variant: 'error' });
            return;
        }

        calenderDispatch({
            type: 'ADD_SCHEDULE',
            payload: {
                ...addContents,
                idx: length + 1,
                isAllDay,
                color
            }
        });
        setIsOpenAddForm((prev) => !prev);
    };

    return (
        <form
            onSubmit={handleAddEvent}
            css={css([
                MonthlyCalenderStyle.form,
                {
                    width: isMobile ? '100%' : 300,
                    height: isMobile ? '50vh' : '100%',
                    overflow: 'scroll'
                }
            ])}
        >
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
                        '@media (max-width: 430px)': {
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
                        '@media (max-width: 430px)': {
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
                        '@media (max-width: 430px)': {
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
                        '@media (max-width: 430px)': {
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
