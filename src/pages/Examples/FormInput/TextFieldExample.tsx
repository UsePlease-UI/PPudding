import { useState } from 'react';

import TextField from '@components/Form/TextField';

export default function TextFieldExample() {
  const [name, setName] = useState('');

  return (
    <TextField
      isFullWidth
      helperText="10자까지 입력할 수 있습니다."
      labelText="닉네임"
      maxLength={10}
      name="name"
      value={name}
      onChange={(e) => setName(e.currentTarget.value)}
    />
  );
}
