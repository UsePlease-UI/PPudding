import { expect, spyOn, userEvent, within } from '@storybook/test';

import { PASSWORD_REG_EXP } from '@pages/Demo/Register/constants';
import RegisterPage from '@pages/Demo/Register/Register';

import { sleep } from '../utils/common';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/Register Page',
  component: RegisterPage,
  argTypes: {},
} satisfies Meta<typeof RegisterPage>;

export default meta;
type Story = StoryObj<typeof RegisterPage>;

export const Default: Story = {
  args: {},
};

Default.play = async ({ canvasElement, step }) => {
  // https://github.com/storybookjs/storybook/issues/16971#issuecomment-1186028103
  const body = canvasElement.parentElement!;
  const canvas = within(canvasElement);

  const name = canvas.getByLabelText('닉네임');
  const email = canvas.getByLabelText('이메일');
  const password = canvas.getByLabelText('비밀번호');
  const [year, month, day] = canvas.getAllByRole('combobox');
  const registerButton = canvas.getByRole('button', { name: /등록/i });
  const gender = canvas.getByRole('radio', { name: '여성' });
  const useYn = canvas.getByRole('radio', { name: '미사용' });
  const terms = canvas.getByRole('checkbox', { name: '이용약관 동의' });
  const policy = canvas.getByRole('checkbox', { name: '(선택) 마케팅 동의' });
  const consoleSpy = spyOn(console, 'log');

  await step('닉네임 입력', async () => {
    expect(name).toHaveAttribute('type', 'text');
    expect(name).toBeRequired();
    expect(name).toHaveAttribute('maxLength', '100');
    await userEvent.type(name, 'storybooktest123', { delay: 100 });
  });

  await step('이메일 입력', async () => {
    expect(email).toHaveAttribute('type', 'email');
    expect(email).toBeRequired();
    await userEvent.type(email, 'test123', { delay: 100 });
  });

  await step('비밀번호 입력', async () => {
    expect(password).toHaveAttribute('type', 'password');
    expect(password).toBeRequired();
    expect(password).toHaveAttribute('minLength', '8');
    expect(password).toHaveAttribute('maxLength', '16');
    await userEvent.type(password, 'Supersecret123!', { delay: 100 });
    expect('Supersecret123!').toEqual(expect.stringMatching(PASSWORD_REG_EXP));
  });

  // portal에서 값을 찾아오도록 body에서 findByText
  await step('연도 선택', async () => {
    await userEvent.click(year);
    await sleep(500);
    await userEvent.click(await within(body).findByText('2021년'));
    await sleep(500);
  });

  await step('월 선택', async () => {
    await userEvent.click(month);
    await sleep(500);
    await userEvent.click(await within(body).findByText('7월'));
    await sleep(500);
  });

  await step('일 선택', async () => {
    await userEvent.click(day);
    await sleep(500);
    await userEvent.click(await within(body).findByText('7일'));
    await sleep(500);
  });

  await step('성별 선택', async () => {
    await userEvent.click(gender);
    await sleep(500);
  });

  await step('이메일 수신여부 선택', async () => {
    await userEvent.click(useYn);
    await sleep(500);
  });

  await step('이용약관 및 마케팅 동의', async () => {
    await userEvent.click(terms);
    await sleep(500);
    await userEvent.click(policy);
  });

  await step('회원가입 버튼 활성화 및 폼 양식 제출', async () => {
    await sleep(1000);
    expect(registerButton).toBeEnabled();
    await userEvent.click(registerButton);
    await sleep(1000);
  });

  await step('이메일 형식 오류 확인 및 이메일 재입력', async () => {
    await userEvent.clear(canvas.getByLabelText('이메일'));
    await sleep(1000);
    await userEvent.type(canvas.getByLabelText('이메일'), 'hi@example.com', { delay: 100 });
  });

  await step('회원가입 성공', async () => {
    await sleep(1000);
    expect(registerButton).toBeEnabled();
    await userEvent.click(registerButton);
    await sleep(1000);
    expect(consoleSpy).toHaveBeenCalledWith('Submit Event Called');
  });
};
