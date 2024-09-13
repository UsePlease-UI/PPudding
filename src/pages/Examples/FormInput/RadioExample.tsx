import { useState } from 'react';

import { Radio, RadioGroup } from '@components/Form/Radio';

export default function RadioExample() {
  const [color, setColor] = useState('red');

  return (
    <div className="flex flex-col gap-10">
      <RadioGroup value={color} onChange={(e) => setColor(e.currentTarget.value)}>
        <Radio label="빨강" name="color" value="red" />
        <Radio label="파랑" name="color" value="blue" />
      </RadioGroup>
      <RadioGroup isRow={false} value={color} onChange={(e) => setColor(e.currentTarget.value)}>
        <Radio label="핑크" name="color" value="pink" />
        <Radio label="초록" name="color" value="green" />
      </RadioGroup>
    </div>
  );
}
