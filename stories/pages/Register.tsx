import { FormEvent, useState } from 'react';

import Button from '@components/Button/Button';
import { ToggleButton, ToggleButtonGroup } from '@components/Button/ToggleButton';
import Select from '@components/Combobox/Select';
import { Checkbox, CheckboxGroup } from '@components/Form/Checkbox';
import { Radio, RadioGroup } from '@components/Form/Radio';
import TextField from '@components/Form/TextField';

import { DAY_OPTIONS, MONTH_OPTIONS, PASSWORD_REG_EXP, YEAR_OPTIONS } from './constants';

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

  const isDisabled = !(name && email && password && year && month && day && gender && useYn && terms && policy);

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
    console.log('Submit Event Called');
  };

  return (
    <div className="flex size-full items-center justify-center bg-white">
      <form className="flex w-full items-center justify-center" onSubmit={handleSubmit}>
        <div className="w-full space-y-5 p-5">
          <TextField
            isFullWidth
            required
            helperText="닉네임은 최소 10자 이상 최대 100자 이하로 입력해 주세요"
            labelText="닉네임"
            maxLength={100}
            name="name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="닉네임을 입력해 주세요"
          />
          <TextField
            isFullWidth
            required
            helperText="이메일은 아이디로 사용됩니다"
            labelText="이메일"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="이메일을 입력해 주세요"
          />
          <TextField
            isFullWidth
            required
            helperText="비밀번호는 최소 8글자 이상 16글자 이하로 입력해 주세요"
            labelText="비밀번호"
            maxLength={16}
            minLength={8}
            name="password"
            pattern={PASSWORD_REG_EXP}
            type="password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="비밀번호를 입력해 주세요"
          />
          <div className="flex gap-5">
            <Select
              id="year-select"
              label={YEAR_OPTIONS.filter((val) => val.value === year)?.[0]?.label}
              labelText="연도"
              value={year}
              onChange={setYear}
              options={YEAR_OPTIONS}
            />
            <Select
              id="month-select"
              label={MONTH_OPTIONS.filter((val) => val.value === month)?.[0]?.label}
              labelText="월"
              value={month}
              onChange={setMonth}
              options={MONTH_OPTIONS}
            />
            <Select
              id="day-select"
              label={DAY_OPTIONS.filter((val) => val.value === day)?.[0]?.label}
              labelText="일"
              value={day}
              onChange={setDay}
              options={DAY_OPTIONS}
            />
          </div>
          <div className="space-y-1.25">
            <span className="text-12 font-semibold">성별</span>
            <RadioGroup value={gender} onChange={(e) => setGender(e.currentTarget.value)}>
              <Radio label="선택안함" name="gender" size="medium" value="N/A" />
              <Radio label="여성" name="gender" size="medium" value="F" />
              <Radio label="남성" name="gender" size="medium" value="M" />
            </RadioGroup>
          </div>
          <div className="space-y-1.25">
            <span className="text-12 font-semibold">이메일 수신여부</span>
            <ToggleButtonGroup value={useYn} onClick={setUseYn}>
              <ToggleButton size="large" value="Y">
                사용
              </ToggleButton>
              <ToggleButton size="large" value="N">
                미사용
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="space-y-2.5">
            <Checkbox checked={terms && policy} label="전체 동의" size="medium" value="terms" onChange={handleCheck} />
            <CheckboxGroup gap={5} isRow={false}>
              <Checkbox
                checked={terms}
                label="이용약관 동의"
                size="medium"
                value="terms"
                onChange={() => setTerms((prev) => !prev)}
              />
              <Checkbox
                checked={policy}
                label="(선택) 마케팅 동의"
                size="medium"
                value="policy"
                onChange={() => setPolicy((prev) => !prev)}
              />
            </CheckboxGroup>
          </div>
          <Button isFullWidth isDisabled={isDisabled} size="large" type="submit" variant="contained">
            등록
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
