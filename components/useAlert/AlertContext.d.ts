export type AlertOptionsType = {
    canDismiss?: boolean;
    delay?: number;
    variant?: 'default' | 'error' | 'info' | 'success' | 'warning';
};
export interface AlertContextType {
    onAlert: (content: string, options?: AlertOptionsType) => void;
}
export declare const AlertContext: import('../../../node_modules/react').Context<AlertContextType | undefined>;
