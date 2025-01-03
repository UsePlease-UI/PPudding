import { ReactNode } from '../../../node_modules/react';
export interface TabProviderType {
    children: ReactNode;
    value: number;
    onChange: (newValue: number) => void;
}
declare const TabProvider: ({ children, onChange, value }: TabProviderType) => import("react/jsx-runtime").JSX.Element;
export default TabProvider;
