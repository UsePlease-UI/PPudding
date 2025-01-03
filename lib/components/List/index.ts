import Collapse from './Collapse';
import CollapsedList from './CollapsedList';
import List from './List';
import ListActionItem from './ListActionItem';
import ListItem from './ListItem';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';
import ListMetadata from './ListMetadata';

export default Object.assign(List, {
  ActionItem: ListActionItem,
  Collapse,
  CollapsedList,
  Item: ListItem,
  ItemButton: ListItemButton,
  ItemIcon: ListItemIcon,
  ItemText: ListItemText,
  Metadata: ListMetadata,
});
