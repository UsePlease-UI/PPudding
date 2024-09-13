import { Checkbox } from '@components/Form/Checkbox';
import { Radio, RadioGroup } from '@components/Form/Radio';

import useMobile from '@hooks/useMobile';

interface Props {
  name: string;
  options: string[];
  value: string;
  onChange: (newValue: string) => void;
}

export const RadioControls = ({ name, onChange, options, value }: Props) => {
  const { isTablet } = useMobile();

  return (
    <div>
      <strong className="text-14 tablet:text-16">
        Choose <span className="capitalize text-primary-800">{name}</span>
      </strong>
      <RadioGroup
        gap={isTablet ? 0 : 2.5}
        isRow={!isTablet}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      >
        {options.map((val) => (
          <Radio
            key={val}
            label={val}
            name={name.replace(' ', '').toLowerCase()}
            size={isTablet ? 'small' : 'medium'}
            value={val}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

interface CheckboxControlProps {
  checked: boolean;
  label: string;
  name: string;
  onChange: (isChecked: boolean) => void;
}
export const CheckboxControl = ({ checked, label, name, onChange }: CheckboxControlProps) => {
  const { isTablet } = useMobile();

  return (
    <div>
      <strong className="block text-14 tablet:text-16">
        Choose <span className="capitalize text-primary-800">{name}</span>
      </strong>
      <Checkbox
        checked={checked}
        label={label}
        size={isTablet ? 'small' : 'medium'}
        onChange={(e) => onChange(e.currentTarget.checked)}
      />
    </div>
  );
};
