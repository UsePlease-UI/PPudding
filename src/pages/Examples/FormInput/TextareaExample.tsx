import { useState } from 'react';

import Textarea from '@components/Form/Textarea';

export default function TextareaExample() {
    const [description, setDescription] = useState('');

    return (
        <Textarea
            labelText="설명"
            helperText="100자까지 입력할 수 있습니다."
            name="description"
            value={description}
            maxLength={100}
            onChange={(e) => setDescription(e.currentTarget.value)}
        />
    );
}
