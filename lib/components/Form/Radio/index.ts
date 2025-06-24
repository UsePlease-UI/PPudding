import Radio from './Radio';
import RadioGroup from './RadioGroup';

// Component Export
export default Object.assign(Radio, {
  Group: RadioGroup,
});

// Types Export
export type { RadioType } from './Radio';
export type { RadioGroupType } from './RadioGroup';
export type { RadioPositionType, RadioSizeType } from './styles';
