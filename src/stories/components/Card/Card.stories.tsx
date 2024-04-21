import { Box, Divider, FlexBox, Typography } from '@components/Base';
import { Button, IconButton } from '@components/Button';
import Card from '@components/Card';

import {
    CalendarFilled,
    CallFilled,
    HeartRegular,
    MailFilled,
    MoreVerticalRegular,
    PaintBrushFilled,
    ShareRegular
} from '@fluentui/react-icons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Card/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
    render: () => (
        <Card>
            <Card.Media type="image" height={350} width={350} src="https://picsum.photos/id/360/200/300" />
            <Card.Text primaryText="멋진 UI를 위한 CSS 스터디" secondaryText="UI/UX" />
        </Card>
    ),
    args: {}
};

export const ExpandableCard: Story = {
    render: () => (
        <Card>
            <Card.Media type="image" height={350} width={350} src="https://picsum.photos/id/1/200/300" />
            <Card.Text
                isExpandable
                primaryText="Welcome Class"
                secondaryText="First Session of UI/UX Class"
                expandedContents={
                    <>
                        <FlexBox alignItems="items-center" gap="gap-10">
                            <Box
                                width="w-40"
                                height="h-40"
                                backgroundColor="bg-primary-600"
                                borderRadius="rounded-full"
                            >
                                <CallFilled className="m-10 h-20 w-20 text-white" />
                            </Box>
                            <FlexBox flexDirection="flex-col" alignSelf="flex-start">
                                <Typography fontSize="text-14" fontWeight="font-normal">
                                    (00) 0000-0000
                                </Typography>
                                <Typography component="small" fontSize="text-12" color="text-gray-600">
                                    TEL
                                </Typography>
                            </FlexBox>
                        </FlexBox>
                        <Divider orientation="horizontal" margin="my-10" backgroundColor="bg-gray-100" />
                        <FlexBox alignItems="items-center" gap="gap-10">
                            <Box
                                width="w-40"
                                height="h-40"
                                backgroundColor="bg-primary-600"
                                borderRadius="rounded-full"
                            >
                                <MailFilled className="m-10 h-20 w-20 text-white" />
                            </Box>
                            <FlexBox flexDirection="flex-col" alignSelf="flex-start">
                                <Typography fontSize="text-14" fontWeight="font-normal">
                                    example-email@test.com
                                </Typography>
                                <Typography component="small" fontSize="text-12" color="text-gray-600">
                                    E-MAIL
                                </Typography>
                            </FlexBox>
                        </FlexBox>
                        <Divider orientation="horizontal" margin="my-10" backgroundColor="bg-gray-100" />
                        <FlexBox alignItems="items-center" gap="gap-10">
                            <Box
                                width="w-40"
                                height="h-40"
                                backgroundColor="bg-primary-600"
                                borderRadius="rounded-full"
                            >
                                <CalendarFilled className="m-10 h-20 w-20 text-white" />
                            </Box>
                            <FlexBox flexDirection="flex-col" alignSelf="flex-start">
                                <Typography fontSize="text-14" fontWeight="font-normal">
                                    Every Monday, Wednesday
                                </Typography>
                                <Typography component="small" fontSize="text-12" color="text-gray-600">
                                    SCHEDULE
                                </Typography>
                            </FlexBox>
                        </FlexBox>
                    </>
                }
            />
        </Card>
    ),
    args: {}
};

export const ActionCard: Story = {
    render: () => {
        return (
            <Card>
                <Card.Header>
                    <Card.SupportingVisual type="icon" icon={<PaintBrushFilled className="h-20 w-20" />} />
                    <Card.Title title="멋진 UI를 위한 CSS 스터디" />
                </Card.Header>
                <Card.Media type="image" height={200} width={350} src="https://picsum.photos/id/464/200/300" />
                <Card.Actions
                    primaryText="멋진 UI를 위한 CSS 스터디"
                    secondaryText="UX/UI"
                    actions={
                        <FlexBox alignItems="items-center" justifyContent="justify-between">
                            <Button size="small" variant="outlined">
                                신청하기
                            </Button>
                            <FlexBox alignItems="items-center" gap="gap-10">
                                <IconButton aria-label="좋아요" size="small" variant="text">
                                    <HeartRegular />
                                </IconButton>
                                <IconButton aria-label="공유하기" size="small" variant="text">
                                    <ShareRegular />
                                </IconButton>
                                <IconButton aria-label="더보기" size="small" variant="text">
                                    <MoreVerticalRegular />
                                </IconButton>
                            </FlexBox>
                        </FlexBox>
                    }
                />
            </Card>
        );
    },
    args: {}
};
