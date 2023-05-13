import { useState } from 'react';

import { css } from '@emotion/react';

import FlexBox from 'components/atoms/FlexBox';
import TextField from 'components/atoms/TextField';
import FormControl from 'components/molecules/FormControl';

export default function App() {
    const [name, setName] = useState('');

    return (
        <FlexBox direction="column" customCSS={{ padding: 20 }}>
            <FormControl id="name" helperTextId="name-helper-text" helperText="최소 10글자 이상 입력" label="닉네임">
                <TextField
                    title="이름"
                    name="name"
                    value={name}
                    maxLength={10}
                    onChange={(e) => setName(e.currentTarget.value)}
                    customCSS={css({ backgroundColor: 'lightpink' })}
                />
            </FormControl>
        </FlexBox>
    );
}
