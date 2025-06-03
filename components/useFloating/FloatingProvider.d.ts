import { ReactNode } from '../../../node_modules/react';
export interface FloatingProviderType {
    children: ReactNode;
    id: string;
}
declare const FloatingProvider: ({ children, id }: FloatingProviderType) => import("react/jsx-runtime").JSX.Element;
export default FloatingProvider;
