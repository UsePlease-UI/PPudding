import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { customStyles, Heading, Toggle } from './Common';
import { FORM_INPUT_LIST, CheckboxExample, RadioExample, TextFieldExample, TextareaExample } from './FormInput';

export default function FormInputExample() {
    const [searchParams] = useSearchParams();
    const [selected, setSelected] = useState(searchParams.get('component') || FORM_INPUT_LIST[0]);

    return (
        <div className="flex flex-col gap-2.5">
            <Heading title="Form Input Playground" />
            <Toggle selected={selected} onChange={setSelected} options={FORM_INPUT_LIST} />
            <div className={customStyles.toggleComponentContainer}>
                {selected === 'Checkbox' && <CheckboxExample />}
                {selected === 'Radio' && <RadioExample />}
                {selected === 'TextField' && <TextFieldExample />}
                {selected === 'Textarea' && <TextareaExample />}
            </div>
        </div>
    );
}
