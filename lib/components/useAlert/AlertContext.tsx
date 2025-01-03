import { createContext } from 'react';

export type AlertOptionsType = {
  canDismiss?: boolean;
  delay?: number;
  variant?: 'default' | 'error' | 'info' | 'success' | 'warning';
};

export interface AlertContextType {
  onAlert: (content: string, options?: AlertOptionsType) => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);
