import { useState } from 'react';

import Tabs from '@components/Tabs';

export default function TabsExample() {
  const [value, setValue] = useState(1);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs className="min-w-192" value={value} onChange={handleChange}>
      <Tabs.Tab aria-label="탭 네비게이션">
        <Tabs.Item index={1} label="1" />
        <Tabs.Item index={2} label="2" />
        <Tabs.Item index={3} label="3" />
      </Tabs.Tab>
      <Tabs.Panel index={1}>
        <p>Tab Panel #1</p>
      </Tabs.Panel>
      <Tabs.Panel index={2}>
        <p>Tab Panel #2</p>
      </Tabs.Panel>
      <Tabs.Panel index={3}>
        <p>Tab Panel #3</p>
      </Tabs.Panel>
    </Tabs>
  );
}
