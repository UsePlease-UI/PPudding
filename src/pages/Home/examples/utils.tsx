import AccordionExample from './AccordionExample';
import AutoCompleteExample from './AutoCompleteExample';
import ButtonExample from './ButtonExample';
import CheckboxExample from './CheckboxExample';
import ChipExample from './ChipExample';
import DragNDropExample from './DragNDropExample';
import IconButtonExample from './IconButtonExample';
import PaginationExample from './PaginationExample';
import PopOverExample from './PopOverExample';
import RadioExample from './RadioExample';
import SelectExample from './SelectExample';
import SkeletonExample from './SkeletonExample';
import TabExample from './TabExample';
import TableExample from './TableExample';
import TextFieldExample from './TextFieldExample';
import ToggleButtonExample from './ToggleButtonExample';

export function getComponents(type: string) {
    switch (type) {
        case 'Accordion':
            return <AccordionExample />;
        case 'AutoComplete':
            return <AutoCompleteExample />;
        case 'Button':
            return <ButtonExample />;
        case 'Checkbox':
            return <CheckboxExample />;
        case 'Chip':
            return <ChipExample />;
        case 'DragNDrop':
            return <DragNDropExample />;
        case 'IconButton':
            return <IconButtonExample />;
        case 'Pagination':
            return <PaginationExample />;
        case 'PopOver':
            return <PopOverExample />;
        case 'Radio':
            return <RadioExample />;
        case 'Select':
            return <SelectExample />;
        case 'Skeleton':
            return <SkeletonExample />;
        case 'Tab':
            return <TabExample />;
        case 'Table':
            return <TableExample />;
        case 'TextField':
            return <TextFieldExample />;
        case 'Toggle Button':
            return <ToggleButtonExample />;
        default:
            break;
    }

    return null;
}
