import { HTMLAttributes, ReactNode } from 'react';

export type TextType = {
  primaryText?: ReactNode;
  secondaryText?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
