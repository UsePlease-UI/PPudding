import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { customStyles, Heading, Toggle } from './Common';
import { FEEDBACK_LIST, SkeletonExample, AlertExample } from './Feedback';

export default function FeedbackExample() {
    const [searchParams] = useSearchParams();
    const [selected, setSelected] = useState(searchParams.get('component') || FEEDBACK_LIST[0]);

    return (
        <div className="flex flex-col gap-2.5">
            <Heading title="Feedback Playground" />
            <Toggle selected={selected} onChange={setSelected} options={FEEDBACK_LIST} />
            <div className={customStyles.toggleComponentContainer}>
                {selected === 'Alert' && <AlertExample />}
                {selected === 'Skeleton' && <SkeletonExample />}
            </div>
        </div>
    );
}
