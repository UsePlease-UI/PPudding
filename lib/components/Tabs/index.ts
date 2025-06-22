import Tab from './Tab';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import Tabs from './Tabs';

// Component Export
export default Object.assign(Tabs, {
  Item: TabItem,
  Panel: TabPanel,
  Tab: Tab,
});

// Types Export
export type { TabType } from './Tab';
export type { TabItemType } from './TabItem';
export type { TabPanelType } from './TabPanel';
export type { TabsType } from './Tabs';
