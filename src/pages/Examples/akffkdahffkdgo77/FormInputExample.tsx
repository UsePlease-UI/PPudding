import { useState } from 'react';

import { FlexBox } from '@components/Base';
import { ToggleButton, ToggleButtonGroup } from '@components/Button';
import { Checkbox, CheckboxGroup, Radio, RadioGroup, TextField, Textarea } from '@components/Form';

import { HeartFilled, HeartRegular } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

import Heading from '../Common/Heading';
import { customStyles } from '../styles';

export default function FormInputExample() {
    const { isMobile, isTablet } = useMobile();

    const [chocolate, setChocolate] = useState(false);
    const [candy, setCandy] = useState(false);
    const [color, setColor] = useState('red');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [selected, setSelected] = useState('Checkbox');

    return (
        <FlexBox flexDirection="flex-col" gap="gap-10">
            <Heading title="Form Input Playground" />
            <div className={customStyles.toggleContainer}>
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    {['Checkbox', 'Radio', 'TextField', 'Textarea'].map((val) => (
                        <ToggleButton
                            key={val}
                            size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                            name="components"
                            value={val}
                        >
                            {val}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <div className={customStyles.toggleComponentContainer}>
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
                        helperText="10자까지 입력할 수 있습니다."
                        name="name"
                        isFullWidth
                        value={name}
                        maxLength={10}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                )}
                {selected === 'Textarea' && (
                    <Textarea
                        labelText="설명"
                        helperText="100자까지 입력할 수 있습니다."
                        name="description"
                        value={description}
                        maxLength={100}
                        onChange={(e) => setDescription(e.currentTarget.value)}
                    />
                )}
            </div>
        </FlexBox>
    );
}
