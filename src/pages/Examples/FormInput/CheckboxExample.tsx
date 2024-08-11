import { useState } from 'react';

import { HeartFilled, HeartRegular } from '@fluentui/react-icons';

import { Checkbox, CheckboxGroup } from '@components/Form';

export default function CheckboxExample() {
    const [chocolate, setChocolate] = useState(false);
    const [candy, setCandy] = useState(false);

    return (
        <CheckboxGroup gap={10}>
            <Checkbox
                label="초콜릿"
                value="chocolate"
                checked={chocolate}
                icon={<HeartRegular />}
                checkedIcon={<HeartFilled />}
                onChange={() => setChocolate((prev) => !prev)}
            />
            <Checkbox label="사탕" value="candy" checked={candy} onChange={() => setCandy((prev) => !prev)} />
        </CheckboxGroup>
    );
}
