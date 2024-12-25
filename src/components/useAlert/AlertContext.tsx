import { createContext } from 'react';

export type OptionsType = {
  canDismiss?: boolean;
  delay?: number;
  variant?: 'default' | 'error' | 'info' | 'success' | 'warning';
};

export type AlertContextType = {
  onAlert: (content: string, options?: OptionsType) => void;
};

export const AlertContext = createContext<AlertContextType | undefined>(undefined);
