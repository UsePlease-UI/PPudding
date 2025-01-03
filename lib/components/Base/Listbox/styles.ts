import { joinClassNames } from '@utils/format';

// [공통] Listbox 스타일
export const listStyle = {
  list: joinClassNames(
    'max-h-75 w-full overflow-y-auto overflow-x-hidden rounded border border-gray-100 bg-white py-1',
  ),
  listItem: joinClassNames('h-10 w-full min-w-30 shadow-inset01 hover:bg-primary-50'),
  listItemButton: joinClassNames(
    'h-10 w-full truncate px-3 text-left text-14 font-normal leading-normal hover:font-medium hover:text-primary-900 focus:font-medium focus:text-primary-900',
  ),
  selected: joinClassNames(
    'bg-primary-600 font-medium text-white hover:font-medium hover:text-white focus:font-medium focus:text-white',
  ),
};
