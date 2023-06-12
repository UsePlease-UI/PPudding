import { useState } from 'react';

import Checkbox from '@atoms/Checkbox';
import FlexBox from '@atoms/FlexBox';

import { HeartIcon, SolidHeartIcon } from '@assets/icons';

export default function CheckboxExample() {
    const [chocolate, setChocolate] = useState(false);
    const [candy, setCandy] = useState(false);

    return (
        <FlexBox gap={10}>
            <Checkbox
                label="초콜릿"
                value="chocolate"
                checked={chocolate}
                icon={<HeartIcon />}
                checkedIcon={<SolidHeartIcon />}
                onChange={() => setChocolate((prev) => !prev)}
            />
            <Checkbox label="사탕" value="candy" checked={candy} onChange={() => setCandy((prev) => !prev)} />
        </FlexBox>
    );
}
