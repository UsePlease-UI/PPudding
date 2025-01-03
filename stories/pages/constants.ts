// Register
export const PASSWORD_REG_EXP = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?]).{8,16}$';

export const YEAR_OPTIONS = Array.from({ length: 124 })
  .map((_, index) => ({
    label: `${1900 + index}년`,
    value: `${1900 + index}`,
  }))
  .sort((a, b) => +b.value - +a.value);

export const MONTH_OPTIONS = Array.from({ length: 12 }).map((_, index) => ({
  label: `${index + 1}월`,
  value: `${index + 1}`,
}));

export const DAY_OPTIONS = Array.from({ length: 31 }).map((_, index) => ({
  label: `${index + 1}일`,
  value: `${index + 1}`,
}));

// Editor
export const DEFAULT_VALUE = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis sem purus, id sollicitudin justo congue id. Nam luctus libero ligula, et condimentum lacus iaculis nec. Vestibulum et massa velit. Donec magna lacus, condimentum vitae dolor quis, tincidunt pulvinar mauris. In blandit viverra rutrum. Vivamus rutrum cursus rhoncus. Phasellus euismod accumsan nibh, in sollicitudin leo ultrices nec. Vestibulum nulla nisi, tincidunt sit amet lacinia vitae, congue eget ante. Phasellus quis tristique turpis, egestas dignissim risus.\n\nPhasellus pretium, mauris eget dignissim sollicitudin, libero neque lobortis massa, eget imperdiet est metus non dui. Fusce blandit velit lacus, sit amet lobortis diam consectetur id. Aliquam non egestas augue. Quisque vel facilisis erat. Aliquam sem augue, posuere vel lorem at, iaculis blandit risus. Sed aliquet ultrices felis, et consequat velit scelerisque eu. Nullam ullamcorper ut odio quis aliquam. Sed in massa diam. Quisque massa nisi, tincidunt blandit magna nec, semper placerat mi. Nulla eleifend tempor massa, vel faucibus turpis hendrerit cursus. Praesent sem sapien, commodo et est nec, placerat euismod neque. Nullam erat eros, aliquam id pharetra et, aliquam nec arcu. Pellentesque vel massa neque. Praesent pharetra a magna vel ultricies.`;

export const COLOR_LIST = [
  'text-red-600',
  'text-orange-600',
  'text-yellow-600',
  'text-green-600',
  'text-primary-800',
  'text-purple-600',
  'text-gray-600',
  'text-black',
];

export type TextAlignType = 'text-center' | 'text-justify' | 'text-left' | 'text-right';
