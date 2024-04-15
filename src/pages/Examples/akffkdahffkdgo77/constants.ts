import { v4 as uuid } from 'uuid';

export const OPTIONS = [
    { label: '선택', value: '' },
    { label: '딸기', value: '1' },
    { label: '바나나', value: '2' },
    { label: '초코', value: '3' },
    { label: '우유', value: '4' }
];

export const AUTOCOMPLETE = [
    {
        idx: uuid(),
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        idx: uuid(),
        label: 'Sed in eros vitae erat sollicitudin sagittis sed tincidunt odio. ',
        value: 'Sed in eros vitae erat sollicitudin sagittis sed tincidunt odio. '
    },
    {
        idx: uuid(),
        label: 'Donec libero enim, placerat vitae tempus ac, luctus sed ex. Ut fringilla vestibulum molestie.',
        value: 'Donec libero enim, placerat vitae tempus ac, luctus sed ex. Ut fringilla vestibulum molestie.'
    },
    {
        idx: uuid(),
        label: 'Ut lacinia posuere imperdiet.',
        value: 'Ut lacinia posuere imperdiet.'
    },
    {
        idx: uuid(),
        label: 'Curabitur non elit quis ante vulputate iaculis.',
        value: 'Curabitur non elit quis ante vulputate iaculis.'
    }
];
