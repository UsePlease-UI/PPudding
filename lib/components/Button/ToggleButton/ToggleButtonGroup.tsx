import { ChangeEvent, Children, cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface ToggleButtonGroupType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: ReactNode;
  value?: string | string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ToggleButtonGroup({ children, className, onChange, value, ...rest }: ToggleButtonGroupType) {
  const isMultiple = typeof value !== 'string';

  return (
    <div
      {...rest}
      {...(!isMultiple && { role: 'radiogroup' })}
      className={joinClassNames('flex', className && className)}
    >
      {Children.toArray(children).map((child) =>
        cloneElement(child as ReactElement, {
          currentValue: value,
          isMultiple,
          onChange,
        }),
      )}
    </div>
  );
}
