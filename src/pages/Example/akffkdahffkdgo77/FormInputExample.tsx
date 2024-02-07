/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

import { Divider, FlexBox, Typography } from 'components/Base';
import { Checkbox, CheckboxGroup } from 'components/Form/Checkbox';
import { Radio, RadioGroup } from 'components/Form/Radio';
import TextField from 'components/Form/TextField';

export default function FormInputExample() {
    const [chocolate, setChocolate] = useState(false);
    const [candy, setCandy] = useState(false);
    const [color, setColor] = useState('red');
    const [name, setName] = useState('');

    return (
        <FlexBox flexDirection="column" gap={10}>
            <Typography component="h2" fontSize={24}>
                Checkbox
            </Typography>
            <CheckboxGroup gap={10}>
                <Checkbox
                    label="초콜릿"
                    value="chocolate"
                    checked={chocolate}
                    icon={<HeartIcon />}
                    checkedIcon={<SolidHeartIcon />}
                    onChange={() => setChocolate((prev) => !prev)}
                />
                <Checkbox label="사탕" value="candy" checked={candy} onChange={() => setCandy((prev) => !prev)} />
            </CheckboxGroup>
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                Radio
            </Typography>
            <FlexBox flexDirection="column" gap={10}>
                <RadioGroup value={color} onChange={(e) => setColor(e.currentTarget.value)}>
                    <Radio name="color" label="빨강" value="red" />
                    <Radio name="color" label="파랑" value="blue" />
                </RadioGroup>
                <RadioGroup isRow={false} value={color} onChange={(e) => setColor(e.currentTarget.value)}>
                    <Radio name="color" label="핑크" value="pink" />
                    <Radio name="color" label="초록" value="green" />
                </RadioGroup>
            </FlexBox>
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                TextField
            </Typography>
            <TextField
                labelText="닉네임"
                helperText="최소 10글자 이상 입력"
                name="name"
                isFullWidth
                value={name}
                maxLength={10}
                onChange={(e) => setName(e.currentTarget.value)}
            />
        </FlexBox>
    );
}
