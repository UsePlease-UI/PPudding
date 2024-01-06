import { useState } from 'react';

import FlexBox from 'components/Base/FlexBox';
import FormControl from 'components/Form/FormControl';
import TextField from 'components/Form/TextField';

import palette from 'styles/palette';

export default function TextFieldExample() {
    const [name, setName] = useState('');

    return (
        <FlexBox direction="column" gap={10} customCSS={{ margin: '20px 0' }}>
            <FormControl id="name" helperTextId="name-helper-text" helperText="최소 10글자 이상 입력" label="닉네임">
                <TextField
                    title="이름"
                    name="name"
                    value={name}
                    maxLength={10}
                    onChange={(e) => setName(e.currentTarget.value)}
                    customCSS={{
                        borderColor: palette.secondary.main,
                        '@media (max-width: 425px)': {
                            minWidth: 0,
                            width: '100%'
                        }
                    }}
                />
            </FormControl>
        </FlexBox>
    );
}
