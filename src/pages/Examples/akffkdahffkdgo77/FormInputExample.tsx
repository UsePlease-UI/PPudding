import { useState } from 'react';

import { FlexBox, Typography } from '@components/Base';
import { ToggleButton, ToggleButtonGroup } from '@components/Button';
import { Checkbox, CheckboxGroup, Radio, RadioGroup, TextField } from '@components/Form';

import { HeartFilled, HeartRegular } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

export default function FormInputExample() {
    const { isMobile, isTablet } = useMobile();

    const [chocolate, setChocolate] = useState(false);
    const [candy, setCandy] = useState(false);
    const [color, setColor] = useState('red');
    const [name, setName] = useState('');

    const [selected, setSelected] = useState('Checkbox');

    return (
        <FlexBox flexDirection="flex-col" gap="gap-10">
            <Typography
                component="h2"
                fontSize="text-24"
                fontWeight="font-black"
                color="text-primary-600"
                textTransform="uppercase"
                margin={isTablet ? 'mb-10' : 'mb-20'}
            >
                Form Input Playground
            </Typography>
            <div className="max-w-full overflow-x-auto scrollbar-hide">
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Checkbox"
                    >
                        Checkbox
                    </ToggleButton>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Radio"
                    >
                        Radio
                    </ToggleButton>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="TextField"
                    >
                        TextField
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="shadow03 flex w-full items-center justify-center rounded border border-primary-100 p-20">
                {selected === 'Checkbox' && (
                    <CheckboxGroup gap="gap-10">
                        <Checkbox
                            label="초콜릿"
                            value="chocolate"
                            checked={chocolate}
                            icon={<HeartRegular />}
                            checkedIcon={<HeartFilled />}
                            onChange={() => setChocolate((prev) => !prev)}
                        />
                        <Checkbox
                            label="사탕"
                            value="candy"
                            checked={candy}
                            onChange={() => setCandy((prev) => !prev)}
                        />
                    </CheckboxGroup>
                )}
                {selected === 'Radio' && (
                    <FlexBox flexDirection="flex-col" gap="gap-10">
                        <RadioGroup value={color} onChange={(e) => setColor(e.currentTarget.value)}>
                            <Radio name="color" label="빨강" value="red" />
                            <Radio name="color" label="파랑" value="blue" />
                        </RadioGroup>
                        <RadioGroup isRow={false} value={color} onChange={(e) => setColor(e.currentTarget.value)}>
                            <Radio name="color" label="핑크" value="pink" />
                            <Radio name="color" label="초록" value="green" />
                        </RadioGroup>
                    </FlexBox>
                )}
                {selected === 'TextField' && (
                    <TextField
                        labelText="닉네임"
                        helperText="최소 10글자 이상 입력"
                        name="name"
                        isFullWidth
                        value={name}
                        maxLength={10}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                )}
            </div>
        </FlexBox>
    );
}
