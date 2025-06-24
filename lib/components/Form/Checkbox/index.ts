import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

// Component Export
export default Object.assign(Checkbox, {
  Group: CheckboxGroup,
});

// Types Export
export type { CheckboxType } from './Checkbox';
export type { CheckboxGroupType } from './CheckboxGroup';
export type { CheckboxPositionType, CheckboxSizeType } from './styles';
