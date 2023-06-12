import { useState } from 'react';

import FlexBox from '@atoms/FlexBox';
import Radio from '@atoms/Radio';
import RadioGroup from '@atoms/RadioGroup';

export default function RadioExample() {
    const [color, setColor] = useState('red');

    return (
        <FlexBox direction="column" gap={10}>
            <RadioGroup value={color} onChange={(e) => setColor(e.currentTarget.value)}>
                <Radio name="color" label="빨강" value="red" />
                <Radio name="color" label="파랑" value="blue" />
            </RadioGroup>
            <RadioGroup isRow={false} value={color} onChange={(e) => setColor(e.currentTarget.value)}>
                <Radio name="color" label="핑크" value="pink" />
                <Radio name="color" label="초록" value="green" />
            </RadioGroup>
        </FlexBox>
    );
}
