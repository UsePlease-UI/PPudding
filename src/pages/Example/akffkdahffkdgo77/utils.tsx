import ButtonExample from './ButtonExample';
import ComboboxExample from './ComboboxExample';
import DataDisplayExample from './DataDisplayExample';
import FeedbackExample from './FeedbackExample';
import FormInputExample from './FormInputExample';

export function getComponents(type?: string) {
    switch (type) {
        case 'button':
            return <ButtonExample />;
        case 'combobox':
            return <ComboboxExample />;
        case 'data display':
            return <DataDisplayExample />;
        case 'feedback':
            return <FeedbackExample />;
        case 'form input':
            return <FormInputExample />;
        default:
            break;
    }

    return null;
}
