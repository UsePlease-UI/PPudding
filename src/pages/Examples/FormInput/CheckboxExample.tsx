import { useState } from 'react';

import { HeartFilled, HeartRegular } from '@fluentui/react-icons';

import { Checkbox, CheckboxGroup } from '@components/Form/Checkbox';

export default function CheckboxExample() {
  const [chocolate, setChocolate] = useState(false);
  const [candy, setCandy] = useState(false);

  return (
    <CheckboxGroup gap={10}>
      <Checkbox
        checked={chocolate}
        checkedIcon={<HeartFilled />}
        icon={<HeartRegular />}
        label="초콜릿"
        value="chocolate"
        onChange={() => setChocolate((prev) => !prev)}
      />
      <Checkbox checked={candy} label="사탕" value="candy" onChange={() => setCandy((prev) => !prev)} />
    </CheckboxGroup>
  );
}
