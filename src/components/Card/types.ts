import { HTMLAttributes, ReactNode } from 'react';

export type TextType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    primaryText?: ReactNode;
    secondaryText?: ReactNode;
};
