export interface FloatingContextType {
    id: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
export declare const FloatingContext: import('../../../node_modules/react').Context<FloatingContextType | undefined>;
