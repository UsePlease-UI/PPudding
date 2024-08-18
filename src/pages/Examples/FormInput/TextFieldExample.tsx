import { useState } from 'react';

import TextField from '@components/Form/TextField';

export default function TextFieldExample() {
    const [name, setName] = useState('');

    return (
        <TextField
            labelText="닉네임"
            helperText="10자까지 입력할 수 있습니다."
            name="name"
            isFullWidth
            value={name}
            maxLength={10}
            onChange={(e) => setName(e.currentTarget.value)}
        />
    );
}
