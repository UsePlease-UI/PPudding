export const PASSWORD_REG_EXP = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?]).{8,16}$';

export const YEAR_OPTIONS = Array.from({ length: 124 })
    .map((_, index) => ({
        label: `${1900 + index}년`,
        value: `${1900 + index}`
    }))
    .sort((a, b) => +b.value - +a.value);

export const MONTH_OPTIONS = Array.from({ length: 12 }).map((_, index) => ({
    label: `${index + 1}월`,
    value: `${index + 1}`
}));

export const DAY_OPTIONS = Array.from({ length: 31 }).map((_, index) => ({
    label: `${index + 1}일`,
    value: `${index + 1}`
}));
