/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import Button from '@atoms/Button';
import Checkbox from '@atoms/Checkbox';
import FlexBox from '@atoms/FlexBox';
import Radio from '@atoms/Radio';
import RadioGroup from '@atoms/RadioGroup';
import TextField from '@atoms/TextField';
import ToggleButton from '@atoms/ToggleButton';
import ToggleButtonGroup from '@atoms/ToggleButtonGroup';
import { PASSWORD_REG_EXP } from '@constants/regExp';
import FormControl from '@molecules/FormControl';
import Select from '@molecules/Select';

import { css } from '@emotion/react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const containerStyle = css({
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const formStyle = css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' });

const YEAR_OPTIONS = Array.from({ length: 124 })
    .map((_, index) => ({
        label: `${1900 + index}년`,
        value: `${1900 + index}`
    }))
    .sort((a, b) => +b.value - +a.value);

const MONTH_OPTIONS = Array.from({ length: 12 }).map((_, index) => ({
    label: `${index + 1}월`,
    value: `${index + 1}`
}));

const DAY_OPTIONS = Array.from({ length: 31 }).map((_, index) => ({
    label: `${index + 1}일`,
    value: `${index + 1}`
}));

const textStyle = css({ fontSize: 12, fontWeight: 600 });

const buttonCustomCSS = {
    marginTop: 20,
    backgroundColor: 'pink',
    borderColor: 'pink',
    width: '100%',
    color: '#000000',
    '& > div': {
        gap: 10,
        justifyContent: 'center'
    },
    '&:disabled': {
        color: '#999999',
        borderColor: '#999999',
        backgroundColor: '#eeeeee'
    }
};

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [year, setYear] = useState('2023');
    const [month, setMonth] = useState('1');
    const [day, setDay] = useState('1');
    const [gender, setGender] = useState('');
    const [useYn, setUseYn] = useState('Y');

    const [terms, setTerms] = useState(false);
    const [policy, setPolicy] = useState(false);

    const isDisabled = !(name && email && password && year && day && gender && useYn && terms);

    const handleCheck = () => {
        if (terms && policy) {
            setTerms(false);
            setPolicy(false);
        } else {
            setTerms(true);
            setPolicy(true);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log('hello i am submitted!');
    };

    return (
        <div css={containerStyle}>
            <form onSubmit={handleSubmit} css={formStyle}>
                <FlexBox direction="column" gap={10} customCSS={{ width: '100%', maxWidth: 425, padding: 20 }}>
                    <FormControl
                        id="name"
                        helperTextId="name-helper-text"
                        helperText="최소 10자 이상 최대 100자 입력"
                        label="닉네임"
                    >
                        <TextField
                            required
                            autoComplete="new-password"
                            title="이름"
                            placeholder="닉네임을 입력해 주세요"
                            name="name"
                            value={name}
                            maxLength={100}
                            onChange={(e) => setName(e.currentTarget.value)}
                            customCSS={{ width: '100%', maxWidth: '100%', borderColor: 'hotpink' }}
                        />
                    </FormControl>
                    <FormControl
                        id="email"
                        helperTextId="email-helper-text"
                        helperText="이메일은 아이디로 사용됩니다"
                        label="이메일"
                    >
                        <TextField
                            required
                            type="email"
                            autoComplete="new-password"
                            title="이메일"
                            placeholder="이메일을 입력해 주세요"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            customCSS={{ width: '100%', maxWidth: '100%', borderColor: 'hotpink' }}
                        />
                    </FormControl>
                    <FormControl
                        id="password"
                        helperTextId="password-helper-text"
                        helperText="최소 8글자 이상 16글자 이하"
                        label="비밀번호"
                    >
                        <TextField
                            required
                            type="password"
                            autoComplete="new-password"
                            title="영문 대소문자 + 숫자 + !?"
                            placeholder="비밀번호를 입력해 주세요"
                            name="password"
                            value={password}
                            minLength={8}
                            maxLength={16}
                            pattern={PASSWORD_REG_EXP}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            customCSS={{ width: '100%', maxWidth: '100%', borderColor: 'hotpink' }}
                        />
                    </FormControl>
                    <FlexBox gap={20}>
                        <FlexBox direction="column" gap={4}>
                            <small id="year" css={css({ fontWeight: 600 })}>
                                연도
                            </small>
                            <Select
                                id="year-select"
                                aria-labelledby="year"
                                name="year"
                                value={year}
                                label={YEAR_OPTIONS.filter((val) => val.value === year)?.[0]?.label}
                                options={YEAR_OPTIONS}
                                onChange={(e) => setYear(e.currentTarget.value)}
                            />
                        </FlexBox>
                        <FlexBox direction="column" gap={4}>
                            <small id="month" css={css({ fontWeight: 600 })}>
                                월
                            </small>
                            <Select
                                id="month-select"
                                aria-labelledby="month"
                                name="month"
                                value={month}
                                label={MONTH_OPTIONS.filter((val) => val.value === month)?.[0]?.label}
                                options={MONTH_OPTIONS}
                                onChange={(e) => setMonth(e.currentTarget.value)}
                            />
                        </FlexBox>
                        <FlexBox direction="column" gap={4}>
                            <small id="day" css={css({ fontWeight: 600 })}>
                                일
                            </small>
                            <Select
                                id="day-select"
                                aria-labelledby="day"
                                name="day"
                                value={day}
                                label={DAY_OPTIONS.filter((val) => val.value === day)?.[0]?.label}
                                options={DAY_OPTIONS}
                                onChange={(e) => setDay(e.currentTarget.value)}
                            />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="column" gap={5}>
                        <span css={textStyle}>성별</span>
                        <RadioGroup value={gender} onChange={(e) => setGender(e.currentTarget.value)}>
                            <Radio name="gender" label="선택안함" value="N/A" />
                            <Radio name="gender" label="여성" value="F" />
                            <Radio name="gender" label="남성" value="M" />
                        </RadioGroup>
                    </FlexBox>
                    <FlexBox direction="column" gap={5}>
                        <span css={textStyle}>이메일 수신여부</span>
                        <ToggleButtonGroup value={useYn} onChange={(e) => setUseYn(e.currentTarget.value)}>
                            <ToggleButton name="useYn" value="Y">
                                사용
                            </ToggleButton>
                            <ToggleButton name="useYn" value="N">
                                미사용
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </FlexBox>
                    <FlexBox direction="column" gap={10}>
                        <Checkbox label="전체 동의" value="terms" checked={terms && policy} onChange={handleCheck} />
                        <FlexBox direction="column" gap={5}>
                            <Checkbox
                                label="이용약관 동의"
                                value="terms"
                                checked={terms}
                                onChange={() => setTerms((prev) => !prev)}
                            />
                            <Checkbox
                                label="(선택) 마케팅 동의"
                                value="policy"
                                checked={policy}
                                onChange={() => setPolicy((prev) => !prev)}
                            />
                        </FlexBox>
                    </FlexBox>
                    <Button
                        isDisabled={isDisabled}
                        type="submit"
                        variant="contained"
                        hasStartIcon
                        icon={<PaperAirplaneIcon />}
                        customCSS={buttonCustomCSS}
                    >
                        REGISTER
                    </Button>
                </FlexBox>
            </form>
        </div>
    );
}
