import { Checkbox, Radio, RadioGroup } from '@components/Form';

import useMobile from '@hooks/useMobile';

interface Props {
    options: string[];
    name: string;
    value: string;
    onChange: (newValue: string) => void;
}

export const RadioControls = ({ options, name, value, onChange }: Props) => {
    const { isTablet } = useMobile();

    return (
        <div>
            <strong className="text-14 tablet:text-16">
                Choose <span className="capitalize text-primary-800">{name}</span>
            </strong>
            <RadioGroup
                value={value}
                isRow={!isTablet}
                gap={isTablet ? 0 : 10}
                onChange={(e) => onChange(e.currentTarget.value)}
            >
                {options.map((val) => (
                    <Radio
                        key={val}
                        size={isTablet ? 'small' : 'medium'}
                        label={val}
                        name={name.replace(' ', '').toLowerCase()}
                        value={val}
                    />
                ))}
            </RadioGroup>
        </div>
    );
};

interface CheckboxControlProps {
    label: string;
    name: string;
    checked: boolean;
    onChange: (isChecked: boolean) => void;
}
export const CheckboxControl = ({ label, name, checked, onChange }: CheckboxControlProps) => {
    const { isTablet } = useMobile();

    return (
        <div>
            <strong className="block text-14 tablet:text-16">
                Choose Button <span className="capitalize text-primary-800">{name}</span>
            </strong>
            <Checkbox
                label={label}
                checked={checked}
                size={isTablet ? 'small' : 'medium'}
                onChange={(e) => onChange(e.currentTarget.checked)}
            />
        </div>
    );
};
