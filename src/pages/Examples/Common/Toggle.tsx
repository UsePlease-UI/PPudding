import { ToggleButton, ToggleButtonGroup } from '@components/Button';

import useMobile from '@hooks/useMobile';

import { customStyles } from './styles';

type ToggleType = {
    selected: string;
    onChange: (newValue: string) => void;
    options: string[];
};

export default function Toggle({ selected, onChange, options }: ToggleType) {
    const { isMobile, isTablet } = useMobile();

    return (
        <div className={customStyles.toggleContainer}>
            <ToggleButtonGroup value={selected} onChange={(e) => onChange(e.currentTarget.value)}>
                {options.map((val) => (
                    <ToggleButton
                        key={val}
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value={val}
                    >
                        {val}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    );
}
