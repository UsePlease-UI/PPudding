import { v4 as uuid } from 'uuid';

export const OPTIONS = [
    { idx: uuid(), label: '선택', value: '' },
    { idx: uuid(), label: '딸기', value: '1' },
    { idx: uuid(), label: '바나나', value: '2' },
    { idx: uuid(), label: '초코', value: '3' },
    { idx: uuid(), label: '우유', value: '4' }
];

export const AUTOCOMPLETE = [
    {
        idx: uuid(),
        label: 'first option',
        value: 'hello01'
    },
    {
        idx: uuid(),
        label: 'first option22',
        value: 'hello01-22'
    },
    {
        idx: uuid(),
        label: 'second option',
        value: 'hello02'
    },
    {
        idx: uuid(),
        label: 'third option',
        value: 'hello03'
    },
    {
        idx: uuid(),
        label: 'fourth option',
        value: 'hello04'
    },
    {
        idx: uuid(),
        label: 'fifth option',
        value: 'hello05'
    }
];

export const DRAG_N_DROP_LIST = [
    {
        idx: uuid(),
        label: 'first 11 Render',
        value: 'first item'
    },
    {
        idx: uuid(),
        label: 'second 22 Render',
        value: 'second item'
    },
    {
        idx: uuid(),
        label: 'third 33 Render',
        value: 'third item'
    }
];
