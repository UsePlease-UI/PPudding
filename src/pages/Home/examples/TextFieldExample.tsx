import { useState } from 'react';

import palette from 'styles/palette';

import FlexBox from 'components/Base/FlexBox';
import TextField from 'components/Form/TextField';

export default function TextFieldExample() {
    const [name, setName] = useState('');

    return (
        <FlexBox customCSS={{ margin: '20px 0' }}>
            <TextField
                labelText="닉네임"
                helperText="최소 10글자 이상 입력"
                name="name"
                value={name}
                maxLength={10}
                onChange={(e) => setName(e.currentTarget.value)}
                customCSS={{
                    borderColor: palette.secondary[600],
                    '@media (max-width: 425px)': {
                        minWidth: 0,
                        width: '100%'
                    }
                }}
            />
        </FlexBox>
    );
}
