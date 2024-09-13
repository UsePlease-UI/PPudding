import { lazy } from 'react';

const ButtonExample = lazy(() => import('./ButtonExample'));
const ComboboxExample = lazy(() => import('./ComboboxExample'));
const DataDisplayExample = lazy(() => import('./DataDisplayExample'));
const FeedbackExample = lazy(() => import('./FeedbackExample'));
const FormInputExample = lazy(() => import('./FormInputExample'));
const UtilitiesExample = lazy(() => import('./UtilitiesExample'));

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
