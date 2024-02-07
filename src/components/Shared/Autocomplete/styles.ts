import { palette } from 'styles';

export const autoCompleteStyle = {
    inputContainer: {
        width: '100%',
        backgroundColor: palette.neutral.white
    },
    input: {
        textOverflow: 'ellipsis'
    },
    listContainer: {
        position: 'fixed' as const,
        width: '100%'
    }
};
