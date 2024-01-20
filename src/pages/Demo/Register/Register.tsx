/** @jsxImportSource @emotion/react */
import { FormEvent, useState } from 'react';

import { Typography, FlexBox, Box } from 'components/Base';
import Button from 'components/Button/Button';
import { ToggleButton, ToggleButtonGroup } from 'components/Button/ToggleButton';
import Select from 'components/Combobox/Select';
import { Checkbox, CheckboxGroup } from 'components/Form/Checkbox';
import { Radio, RadioGroup } from 'components/Form/Radio';
import TextField from 'components/Form/TextField';

import { DAY_OPTIONS, MONTH_OPTIONS, PASSWORD_REG_EXP, YEAR_OPTIONS } from './constants';
import { registerStyle } from './styles';

const Register = () => {
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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <Box customCSS={registerStyle.container}>
            <form onSubmit={handleSubmit} css={registerStyle.form}>
                <FlexBox flexDirection="column" gap={10} customCSS={registerStyle.formInnerContainer}>
                    <TextField
                        labelText="닉네임"
                        helperText="닉네임은 최소 10자 이상 최대 100자 이하로 입력해 주세요"
                        required
                        placeholder="닉네임을 입력해 주세요"
                        name="name"
                        value={name}
                        maxLength={100}
                        onChange={(e) => setName(e.currentTarget.value)}
                        isFullWidth
                    />
                    <TextField
                        labelText="이메일"
                        helperText="이메일은 아이디로 사용됩니다"
                        required
                        type="email"
                        placeholder="이메일을 입력해 주세요"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        isFullWidth
                    />
                    <TextField
                        labelText="비밀번호"
                        helperText="비밀번호는 최소 8글자 이상 16글자 이하로 입력해 주세요"
                        required
                        type="password"
                        autoComplete="new-password"
                        placeholder="비밀번호를 입력해 주세요"
                        name="password"
                        value={password}
                        minLength={8}
                        maxLength={16}
                        pattern={PASSWORD_REG_EXP}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        isFullWidth
                    />
                    <FlexBox gap={20}>
                        <Select
                            id="year-select"
                            aria-labelledby="year"
                            labelText="연도"
                            name="year"
                            value={year}
                            label={YEAR_OPTIONS.filter((val) => val.value === year)?.[0]?.label}
                            options={YEAR_OPTIONS}
                            onChange={(e) => setYear(e.currentTarget.value)}
                        />
                        <Select
                            id="month-select"
                            aria-labelledby="month"
                            labelText="월"
                            name="month"
                            value={month}
                            label={MONTH_OPTIONS.filter((val) => val.value === month)?.[0]?.label}
                            options={MONTH_OPTIONS}
                            onChange={(e) => setMonth(e.currentTarget.value)}
                        />
                        <Select
                            id="day-select"
                            aria-labelledby="day"
                            labelText="일"
                            name="day"
                            value={day}
                            label={DAY_OPTIONS.filter((val) => val.value === day)?.[0]?.label}
                            options={DAY_OPTIONS}
                            onChange={(e) => setDay(e.currentTarget.value)}
                        />
                    </FlexBox>
                    <FlexBox flexDirection="column" gap={5}>
                        <Typography component="span" fontSize={12} fontWeight="600">
                            성별
                        </Typography>
                        <RadioGroup value={gender} onChange={(e) => setGender(e.currentTarget.value)}>
                            <Radio name="gender" label="선택안함" value="N/A" />
                            <Radio name="gender" label="여성" value="F" />
                            <Radio name="gender" label="남성" value="M" />
                        </RadioGroup>
                    </FlexBox>
                    <FlexBox flexDirection="column" gap={5}>
                        <Typography component="span" fontSize={12} fontWeight="600">
                            이메일 수신여부
                        </Typography>
                        <ToggleButtonGroup value={useYn} onChange={(e) => setUseYn(e.currentTarget.value)}>
                            <ToggleButton size="small" name="useYn" value="Y">
                                사용
                            </ToggleButton>
                            <ToggleButton size="small" name="useYn" value="N">
                                미사용
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </FlexBox>
                    <FlexBox flexDirection="column" gap={10}>
                        <Checkbox label="전체 동의" value="terms" checked={terms && policy} onChange={handleCheck} />
                        <CheckboxGroup isRow={false} gap={5}>
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
                        </CheckboxGroup>
                    </FlexBox>
                    <Button
                        isDisabled={isDisabled}
                        type="submit"
                        variant="contained"
                        size="large"
                        customCSS={registerStyle.button}
                    >
                        REGISTER
                    </Button>
                </FlexBox>
            </form>
        </Box>
    );
};

export default Register;
