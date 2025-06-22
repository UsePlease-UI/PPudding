import { default as Tab } from './Tab';
import { default as TabItem } from './TabItem';
import { default as TabPanel } from './TabPanel';
import { default as Tabs } from './Tabs';
declare const _default: typeof Tabs & {
    Item: typeof TabItem;
    Panel: typeof TabPanel;
    Tab: typeof Tab;
};
export default _default;
export type { TabType } from './Tab';
export type { TabItemType } from './TabItem';
export type { TabPanelType } from './TabPanel';
export type { TabsType } from './Tabs';
