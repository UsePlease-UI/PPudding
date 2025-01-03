import { ReactNode } from '../../../node_modules/react';
import { AlertOptionsType } from './AlertContext';
export type AlertMessageType = {
    id: string;
    content: string;
    options?: AlertOptionsType;
};
export type AlertPositionType = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
export interface AlertProviderType {
    children: ReactNode;
    icon?: ReactNode;
    position?: AlertPositionType;
}
declare const AlertProvider: ({ children, icon, position }: AlertProviderType) => import("react/jsx-runtime").JSX.Element;
export default AlertProvider;
