import { joinClassNames } from '@utils/format';

export const listStyle = {
  list: joinClassNames(
    'max-h-75 w-full overflow-y-auto overflow-x-hidden rounded border border-gray-100 bg-white py-1',
  ),
  listItem: joinClassNames(
    'block h-10 w-full min-w-30 cursor-pointer truncate px-3 py-2 text-left text-14 font-normal leading-normal shadow-inset01 hover:bg-gray-100 active:bg-gray-200',
  ),
  selected: joinClassNames(
    'bg-black font-medium text-white hover:bg-black hover:opacity-80 active:bg-black active:opacity-70',
  ),
};
