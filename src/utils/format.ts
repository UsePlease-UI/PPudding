import { ClassValue, clsx } from 'clsx/lite';
import { extendTailwindMerge } from 'tailwind-merge';

const px1000 = Array.from({ length: 1000 }, (_, idx) => idx + 1);
const rem1000 = px1000.map((px) => `text-${px}`);
const colors = Array.from({ length: 19 }, (_, idx) => 50 * (idx + 1));
const pastelColors = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`.padStart(2, '0'));

// https://github.com/dcastil/tailwind-merge/blob/v2.2.2/src/lib/default-config.ts
// https://github.com/dcastil/tailwind-merge/blob/v2.2.2/docs/recipes.md
// https://github.com/dcastil/tailwind-merge/issues/368
const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            'font-size': [
                ...rem1000,
                'text-h1',
                'text-h2',
                'text-h3',
                'text-h4',
                'text-h5',
                'text-h6',
                'text-b24',
                'text-b18',
                'text-b16',
                'text-b14',
                'text-b12',
                'text-c11',
                'text-c8'
            ],
            'text-color': [
                ...colors.map((val) => `primary-${val}`),
                ...colors.map((val) => `secondary-${val}`),
                ...colors.map((val) => `tertiary-${val}`),
                ...pastelColors.map((val) => `pastel-${val}`)
            ],
            'border-color': [
                ...colors.map((val) => `primary-${val}`),
                ...colors.map((val) => `secondary-${val}`),
                ...colors.map((val) => `tertiary-${val}`),
                ...pastelColors.map((val) => `pastel-${val}`)
            ],
            'bg-color': [
                ...colors.map((val) => `primary-${val}`),
                ...colors.map((val) => `secondary-${val}`),
                ...colors.map((val) => `tertiary-${val}`),
                ...pastelColors.map((val) => `pastel-${val}`)
            ]
        }
    }
});

export const joinClassNames = (...inputs: ClassValue[]) => {
    return twMerge(clsx(...inputs));
};
