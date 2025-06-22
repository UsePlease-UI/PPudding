import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import { listStyle } from './styles';

export interface ListboxOptionType {
  label: string;
  value: string;
  idx?: string;
}

export interface ListboxType extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  children: ReactNode;
}

const Listbox = forwardRef<HTMLDivElement, ListboxType>(function Listbox(props, ref) {
  const { children, className, ...rest } = props;

  return (
    <div
      {...rest}
      ref={ref}
      className={joinClassNames(listStyle.list, className && className)}
      tabIndex={-1}
      role="listbox"
    >
      {children}
    </div>
  );
});

export default Listbox;
