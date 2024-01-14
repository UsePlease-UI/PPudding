import { useState } from 'react';

import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

import { Checkbox, CheckboxGroup } from 'components/Form/Checkbox';

export default function CheckboxExample() {
    const [chocolate, setChocolate] = useState(false);
    const [candy, setCandy] = useState(false);

    return (
        <CheckboxGroup gap={10} customCSS={{ margin: '20px 0' }}>
            <Checkbox
                label="초콜릿"
                value="chocolate"
                checked={chocolate}
                icon={<HeartIcon />}
                checkedIcon={<SolidHeartIcon />}
                onChange={() => setChocolate((prev) => !prev)}
            />
            <Checkbox label="사탕" value="candy" checked={candy} onChange={() => setCandy((prev) => !prev)} />
        </CheckboxGroup>
    );
}
