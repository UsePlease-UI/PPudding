import { useState } from 'react';

import { Divider } from '@components/Base';
import { Button, IconButton } from '@components/Button';
import Card from '@components/Card';
import { Radio, RadioGroup } from '@components/Form';

import {
    CalendarFilled,
    CallFilled,
    HeartRegular,
    MailFilled,
    MoreVerticalRegular,
    PaintBrushFilled,
    ShareRegular
} from '@fluentui/react-icons';

import { customStyles } from '../components/styles';

const VARIANT = ['standard', 'action', 'expandable'];

export default function CardExample() {
    const [variantType, setVariantType] = useState(VARIANT[0]);

    return (
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <strong className="text-14 tablet:text-16">
                    Choose Card <span color="text-primary-800">Variant</span>
                </strong>
                <RadioGroup value={variantType} isRow gap={10} onChange={(e) => setVariantType(e.currentTarget.value)}>
                    {VARIANT.map((val) => (
                        <Radio key={val} size="medium" label={val} name="cardVariant" value={val} />
                    ))}
                </RadioGroup>
            </div>
            <div className={customStyles.tabComponentContainer}>
                {variantType === 'standard' && (
                    <Card>
                        <Card.Media type="image" height={350} width={350} src="https://picsum.photos/id/360/200/300" />
                        <Card.Text primaryText="멋진 UI를 위한 CSS 스터디" secondaryText="UI/UX" />
                    </Card>
                )}
                {variantType === 'expandable' && (
                    <Card>
                        <Card.Media type="image" width={350} height={350} src="https://picsum.photos/id/1/200/300" />
                        <Card.Text
                            isExpandable
                            primaryText="Welcome Class"
                            secondaryText="First Session of UI/UX Class"
                            expandedContents={
                                <>
                                    <div className="flex items-center gap-10">
                                        <div className="h-40 w-40 rounded-full bg-primary-600">
                                            <CallFilled className="m-10 h-20 w-20 text-white" />
                                        </div>
                                        <div className="flex flex-col self-start">
                                            <p className="text-14 font-normal">(00) 0000-0000</p>
                                            <small className="text-12 text-gray-600">TEL</small>
                                        </div>
                                    </div>
                                    <Divider orientation="horizontal" margin="my-10" backgroundColor="bg-gray-100" />
                                    <div className="flex items-center gap-10">
                                        <div className="h-40 w-40 rounded-full bg-primary-600">
                                            <MailFilled className="m-10 h-20 w-20 text-white" />
                                        </div>
                                        <div className="flex flex-col self-start">
                                            <p className="text-14 font-normal">example-email@test.com</p>
                                            <small className="text-12 text-gray-600">E-MAIL</small>
                                        </div>
                                    </div>
                                    <Divider orientation="horizontal" margin="my-10" backgroundColor="bg-gray-100" />
                                    <div className="flex items-center gap-10">
                                        <div className="h-40 w-40 rounded-full bg-primary-600">
                                            <CalendarFilled className="m-10 h-20 w-20 text-white" />
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
                )}
                {variantType === 'action' && (
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
                                <div className="flex items-center justify-between">
                                    <Button size="small" variant="outlined">
                                        신청하기
                                    </Button>
                                    <div className="flex items-center gap-10">
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
                )}
            </div>
        </div>
    );
}
