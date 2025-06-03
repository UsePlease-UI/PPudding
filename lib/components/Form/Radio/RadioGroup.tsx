import { ChangeEvent, Children, cloneElement, ReactElement, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface RadioGroupType {
  children: ReactNode;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  gap?: number;
  isRow?: boolean;
}

export default function RadioGroup(props: RadioGroupType) {
  const { children, className, gap = 10, isRow = true, onChange, value } = props;

  return (
    <div
      role="radiogroup"
      className={joinClassNames(
        'flex flex-col',
        isRow && 'flex-row items-center justify-start',
        gap && `gap-${gap / 4}`,
        className && className,
      )}
    >
      {Children.toArray(children).map((child) =>
        cloneElement(
          child as ReactElement<
            { currentValue: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void } & HTMLElement
          >,
          { currentValue: value, onChange },
        ),
      )}
    </div>
  );
}
