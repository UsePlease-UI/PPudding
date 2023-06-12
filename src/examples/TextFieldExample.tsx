import { useState } from 'react';

import FlexBox from '@atoms/FlexBox';
import TextField from '@atoms/TextField';
import FormControl from '@molecules/FormControl';

export default function TextFieldExample() {
    const [name, setName] = useState('');

    return (
        <FlexBox direction="column" gap={10}>
            <h2>TextField</h2>
            <FormControl id="name" helperTextId="name-helper-text" helperText="최소 10글자 이상 입력" label="닉네임">
                <TextField
                    title="이름"
                    name="name"
                    value={name}
                    maxLength={10}
                    onChange={(e) => setName(e.currentTarget.value)}
                    customCSS={{ borderColor: 'hotpink' }}
                />
            </FormControl>
        </FlexBox>
    );
}
