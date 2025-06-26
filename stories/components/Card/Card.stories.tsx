import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { CalendarIcon, EllipsisVerticalIcon, EnvelopeIcon, PaintBrushIcon, PhoneIcon } from '@heroicons/react/24/solid';

import Divider from '@components/Base/Divider';
import Button from '@components/Button/Button';
import IconButton from '@components/Button/IconButton';
import Card from '@components/Card';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  argTypes: {
    children: { table: { disable: true } },
  },
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Card/Card',
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Example1Default: Story = {
  args: {},
  render: function Render() {
    return (
      <Card>
        <Card.Media height={350} src="https://picsum.photos/id/360/200/300" type="image" width={350} />
        <Card.Text primaryText="멋진 UI를 위한 CSS 스터디" secondaryText="UI/UX" />
      </Card>
    );
  },
};

export const Example2Expandable: Story = {
  args: {},
  render: function Render() {
    return (
      <Card>
        <Card.Media height={350} src="https://picsum.photos/id/1/200/300" type="image" width={350} />
        <Card.Text
          isExpandable
          primaryText="Welcome Class"
          expandedContents={
            <>
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-full bg-black">
                  <PhoneIcon className="m-2.5 size-5 text-white" />
                </div>
                <div className="flex flex-col self-start">
                  <span className="block text-14 font-normal">(00) 0000-0000</span>
                  <small className="text-12 text-gray-600">TEL</small>
                </div>
              </div>
              <Divider className="my-2.5 bg-gray-100" orientation="horizontal" />
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-full bg-black">
                  <EnvelopeIcon className="m-2.5 size-5 text-white" />
                </div>
                <div className="flex flex-col self-start">
                  <span className="block text-14 font-normal">example-email@test.com</span>
                  <small className="text-12 text-gray-600">E-MAIL</small>
                </div>
              </div>
              <Divider className="my-2.5 bg-gray-100" orientation="horizontal" />
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-full bg-black">
                  <CalendarIcon className="m-2.5 size-5 text-white" />
                </div>
                <div className="flex flex-col self-start">
                  <span className="block text-14 font-normal">Every Monday, Wednesday</span>
                  <small className="text-12 text-gray-600">SCHEDULE</small>
                </div>
              </div>
            </>
          }
          secondaryText="First Session of UI/UX Class"
        />
      </Card>
    );
  },
};

export const Example3Action: Story = {
  args: {},
  render: function Render() {
    return (
      <Card>
        <Card.Header>
          <Card.SupportingVisual type="icon" icon={<PaintBrushIcon className="size-5" />} />
          <Card.Title title="멋진 UI를 위한 CSS 스터디" />
        </Card.Header>
        <Card.Media height={200} src="https://picsum.photos/id/464/200/300" type="image" width={350} />
        <Card.Actions
          primaryText="멋진 UI를 위한 CSS 스터디"
          actions={
            <div className="flex items-center justify-between">
              <Button size="small" variant="outlined">
                신청하기
              </Button>
              <div className="flex items-center gap-2.5">
                <IconButton aria-label="좋아요" size="small" variant="text">
                  <HeartIcon />
                </IconButton>
                <IconButton aria-label="공유하기" size="small" variant="text">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="더보기" size="small" variant="text">
                  <EllipsisVerticalIcon />
                </IconButton>
              </div>
            </div>
          }
          secondaryText="UX/UI"
        />
      </Card>
    );
  },
};
