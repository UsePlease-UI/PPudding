import { ReactNode } from '../../../node_modules/react';
export interface TabPanelType {
    children: ReactNode;
    index: number;
    value: number;
    className?: string;
}
export default function TabPanel(props: TabPanelType): import("react/jsx-runtime").JSX.Element;
