import { Children, cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface ToggleButtonGroupType extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  children: ReactNode;
  value?: string | string[];
  onClick?: (selected: string) => void;
}

export default function ToggleButtonGroup({ children, className, onClick, value, ...rest }: ToggleButtonGroupType) {
  return (
    <div {...rest} className={joinClassNames('flex', className && className)} role="group">
      {Children.toArray(children).map((child) =>
        cloneElement(
          child as ReactElement<
            { currentValue?: string | string[]; onClick?: (selected: string) => void } & HTMLElement
          >,
          {
            currentValue: value,
            onClick,
          },
        ),
      )}
    </div>
  );
}
