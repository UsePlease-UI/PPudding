import { ToggleButton, ToggleButtonGroup } from '@components/Button/ToggleButton';

import useMobile from '@hooks/useMobile';

import { customStyles } from './styles';

type ToggleType = {
  options: string[];
  selected: string;
  onChange: (newValue: string) => void;
};

export default function Toggle({ onChange, options, selected }: ToggleType) {
  const { isMobile, isTablet } = useMobile();

  return (
    <div className={customStyles.toggleContainer}>
      <ToggleButtonGroup value={selected} onChange={(e) => onChange(e.currentTarget.value)}>
        {options.map((val) => (
          <ToggleButton
            key={val}
            name="components"
            size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
            value={val}
          >
            {val}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
