import AutocompleteExample from './AutocompleteExample';
import CalenderExample from './CalenderExample';
import DragNDropExample from './DragNDropExample';
import PaginationExample from './PaginationExample';
import PopoverExample from './PopoverExample';

export function getComponents(type?: string) {
    switch (type) {
        case 'autocomplete':
            return <AutocompleteExample />;
        case 'calender':
            return <CalenderExample />;
        case 'drag n drop api':
            return <DragNDropExample />;
        case 'pagination':
            return <PaginationExample />;
        case 'popover':
            return <PopoverExample />;
        default:
            break;
    }

    return null;
}
