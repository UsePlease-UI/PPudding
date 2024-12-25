import {
  CalendarFilled,
  CallFilled,
  HeartRegular,
  MailFilled,
  MoreVerticalRegular,
  PaintBrushFilled,
  ShareRegular,
} from '@fluentui/react-icons';

import Divider from '@components/Base/Divider';
import Button from '@components/Button/Button';
import IconButton from '@components/Button/IconButton';
import Card from '@components/Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Card/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  render: function Render() {
    return (
      <Card>
        <Card.Media height={350} src="https://picsum.photos/id/360/200/300" type="image" width={350} />
        <Card.Text primaryText="멋진 UI를 위한 CSS 스터디" secondaryText="UI/UX" />
      </Card>
    );
  },
  args: {},
};

export const ExpandableCard: Story = {
  render: function Render() {
    return (
      <Card>
        <Card.Media height={350} src="https://picsum.photos/id/1/200/300" type="image" width={350} />
        <Card.Text
          isExpandable
          primaryText="Welcome Class"
          secondaryText="First Session of UI/UX Class"
          expandedContents={
            <>
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-full bg-primary-600">
                  <CallFilled className="m-2.5 size-5 text-white" />
                </div>
                <div className="flex flex-col self-start">
                  <p className="text-14 font-normal">(00) 0000-0000</p>
                  <small className="text-12 text-gray-600">TEL</small>
                </div>
              </div>
              <Divider backgroundColor="bg-gray-100" margin="my-2.5" orientation="horizontal" />
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-full bg-primary-600">
                  <MailFilled className="m-2.5 size-5 text-white" />
                </div>
                <div className="flex flex-col self-start">
                  <p className="text-14 font-normal">example-email@test.com</p>
                  <small className="text-12 text-gray-600">E-MAIL</small>
                </div>
              </div>
              <Divider backgroundColor="bg-gray-100" margin="my-2.5" orientation="horizontal" />
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-full bg-primary-600">
                  <CalendarFilled className="m-2.5 size-5 text-white" />
                </div>
                <div className="flex flex-col self-start">
                  <p className="text-14 font-normal">Every Monday, Wednesday</p>
                  <small className="text-12 text-gray-600">SCHEDULE</small>
                </div>
              </div>
            </>
          }
        />
      </Card>
    );
  },
  args: {},
};

export const ActionCard: Story = {
  render: function Render() {
    return (
      <Card>
        <Card.Header>
          <Card.SupportingVisual icon={<PaintBrushFilled className="size-5" />} type="icon" />
          <Card.Title title="멋진 UI를 위한 CSS 스터디" />
        </Card.Header>
        <Card.Media height={200} src="https://picsum.photos/id/464/200/300" type="image" width={350} />
        <Card.Actions
          primaryText="멋진 UI를 위한 CSS 스터디"
          secondaryText="UX/UI"
          actions={
            <div className="flex items-center justify-between">
              <Button size="small" variant="outlined">
                신청하기
              </Button>
              <div className="flex items-center gap-2.5">
                <IconButton aria-label="좋아요" size="small" variant="text">
                  <HeartRegular />
                </IconButton>
                <IconButton aria-label="공유하기" size="small" variant="text">
                  <ShareRegular />
                </IconButton>
                <IconButton aria-label="더보기" size="small" variant="text">
                  <MoreVerticalRegular />
                </IconButton>
              </div>
            </div>
          }
        />
      </Card>
    );
  },
  args: {},
};
