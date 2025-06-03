import { ClassValue, clsx } from 'clsx/lite';
import { extendTailwindMerge } from 'tailwind-merge';

const px1000 = Array.from({ length: 1000 }, (_, idx) => idx + 1);
const rem1000 = px1000.map((px) => `text-${px}`);
const pastelColors = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`.padStart(2, '0'));

// https://github.com/dcastil/tailwind-merge/blob/v2.2.2/src/lib/default-config.ts
// https://github.com/dcastil/tailwind-merge/blob/v2.2.2/docs/recipes.md
// https://github.com/dcastil/tailwind-merge/issues/368
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'bg-color': [...pastelColors.map((val) => `pastel-${val}`)],
      'border-color': [...pastelColors.map((val) => `pastel-${val}`)],
      'font-size': [...rem1000],
      'text-color': [...pastelColors.map((val) => `pastel-${val}`)],
    },
  },
});

export const joinClassNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};
