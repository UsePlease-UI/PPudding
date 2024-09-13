import { useState } from 'react';

import Textarea from '@components/Form/Textarea';

export default function TextareaExample() {
  const [description, setDescription] = useState('');

  return (
    <Textarea
      helperText="100자까지 입력할 수 있습니다."
      labelText="설명"
      maxLength={100}
      name="description"
      value={description}
      onChange={(e) => setDescription(e.currentTarget.value)}
    />
  );
}
