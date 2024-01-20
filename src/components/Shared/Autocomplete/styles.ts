import { palette } from 'styles';

export const autoCompleteStyle = {
    inputContainer: {
        width: '100%',
        backgroundColor: palette.neutral.white
    },
    listContainer: {
        position: 'fixed' as const,
        width: '100%'
    }
};
