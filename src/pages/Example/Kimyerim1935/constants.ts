import { palette } from 'styles';

export const OPTIONS = [
    { label: '선택', value: '' },
    { label: '딸기', value: '1' },
    { label: '바나나', value: '2' },
    { label: '초코', value: '3' },
    { label: '우유', value: '4' }
];

export type AutocompleteType = {
    idx: number;
    label: string;
    value: string;
};

export const AUTOCOMPLETE = [
    {
        idx: 1,
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        idx: 2,
        label: 'Sed in eros vitae erat sollicitudin sagittis sed tincidunt odio. ',
        value: 'Sed in eros vitae erat sollicitudin sagittis sed tincidunt odio. '
    },
    {
        idx: 3,
        label: 'Donec libero enim, placerat vitae tempus ac, luctus sed ex. Ut fringilla vestibulum molestie.',
        value: 'Donec libero enim, placerat vitae tempus ac, luctus sed ex. Ut fringilla vestibulum molestie.'
    },
    {
        idx: 4,
        label: 'Ut lacinia posuere imperdiet.',
        value: 'Ut lacinia posuere imperdiet.'
    },
    {
        idx: 5,
        label: 'Curabitur non elit quis ante vulputate iaculis.',
        value: 'Curabitur non elit quis ante vulputate iaculis.'
    }
];

export const CALENDER = [
    {
        idx: 1,
        label: 'daily',
        value: 'daily'
    },
    {
        idx: 2,
        label: 'weekly',
        value: 'weekly'
    },
    {
        idx: 3,
        label: 'monthly',
        value: 'monthly'
    },
    {
        idx: 4,
        label: 'yearly',
        value: 'yearly'
    }
];

export const CALENDER_LABEL_COLOR = [
    {
        idx: 1,
        label: 'pick-me',
        value: palette.pastel['01']
    },
    {
        idx: 2,
        label: 'pick-me',
        value: palette.pastel['02']
    },
    {
        idx: 3,
        label: 'pick-me',
        value: palette.pastel['03']
    },
    {
        idx: 4,
        label: 'pick-me',
        value: palette.pastel['04']
    },
    {
        idx: 5,
        label: 'pick-me',
        value: palette.pastel['05']
    },
    {
        idx: 6,
        label: 'pick-me',
        value: palette.pastel['06']
    },
    {
        idx: 7,
        label: 'pick-me',
        value: palette.pastel['07']
    },
    {
        idx: 8,
        label: 'pick-me',
        value: palette.pastel['08']
    },
    {
        idx: 9,
        label: 'pick-me',
        value: palette.pastel['09']
    },
    {
        idx: 10,
        label: 'pick-me',
        value: palette.pastel['10']
    },
    {
        idx: 11,
        label: 'pick-me',
        value: palette.pastel['11']
    },
    {
        idx: 12,
        label: 'pick-me',
        value: palette.pastel['12']
    }
];

export const CALENDER_DUMMY_DATA = [
    {
        idx: 1,
        startDate: '2024-01-22',
        endDate: '2024-01-22',
        color: 'yellowgreen',
        isAllDay: false,
        title: '공부하기',
        description: '열심히 공부하기'
    },
    {
        idx: 2,
        startDate: '2024-01-13',
        endDate: '2024-01-18',
        color: 'plum',
        isAllDay: true,
        title: '병원',
        description: '건강검진 받기'
    },
    {
        idx: 3,
        startDate: '2024-01-13',
        endDate: '2024-01-13',
        color: 'salmon',
        isAllDay: false,
        title: '과제',
        description: '캘린더 만들기'
    },
    {
        idx: 4,
        startDate: '2024-02-10',
        endDate: '2024-02-19',
        color: 'mistyrose',
        isAllDay: true,
        title: '학교',
        description: '수강신청하기'
    },
    {
        idx: 5,
        startDate: '2024-02-01',
        endDate: '2024-02-01',
        color: 'mistyrose',
        isAllDay: false,
        title: '2월 테스트',
        description: '테스트'
    },
    {
        idx: 6,
        startDate: '2024-01-01',
        endDate: '2024-01-01',
        color: 'mistyrose',
        isAllDay: true,
        title: '1월 테스트',
        description: '테스트'
    }
];

export const DRAG_N_DROP = [
    {
        idx: 1,
        label: '사과',
        value: 'apple'
    },
    {
        idx: 2,
        label: '바나나',
        value: 'banana'
    },
    {
        idx: 3,
        label: '키위',
        value: 'kiwi'
    }
];

export const DRAG_N_DROP_2 = [
    {
        idx: 1,
        label: '오렌지',
        value: 'orange'
    },
    {
        idx: 2,
        label: '망고',
        value: 'mango'
    },
    {
        idx: 3,
        label: '복숭아',
        value: 'peach'
    }
];
