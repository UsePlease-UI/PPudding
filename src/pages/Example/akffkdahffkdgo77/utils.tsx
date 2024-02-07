import ButtonExample from './ButtonExample';
import ComboboxExample from './ComboboxExample';
import DataDisplayExample from './DataDisplayExample';
import FeedbackExample from './FeedbackExample';
import FormInputExample from './FormInputExample';
import UtilitiesExample from './UtilitiesExample';

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
        case 'utilities':
            return <UtilitiesExample />;
        default:
            break;
    }

    return null;
}
