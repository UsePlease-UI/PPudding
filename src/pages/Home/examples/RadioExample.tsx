import { useState } from 'react';

import FlexBox from 'components/Base/FlexBox';
import { Radio, RadioGroup } from 'components/Form/Radio';

export default function RadioExample() {
    const [color, setColor] = useState('red');

    return (
        <FlexBox flexDirection="column" gap={10} customCSS={{ margin: '20px 0' }}>
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
