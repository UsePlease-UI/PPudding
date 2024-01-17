import { palette } from 'styles';

export const searchStyle = {
    container: {
        width: '100%',
        marginTop: 100,
        padding: '0 20px'
    },
    moreButtonContainer: {
        width: '100%',
        padding: '0 20px'
    },
    logo: {
        whiteSpace: 'nowrap' as const,
        padding: '0 8px',
        border: `1px solid ${palette.primary[600]}`,
        borderRadius: 4
    },
    marginHorizontal20: {
        margin: '0 20px'
    },
    button: {
        height: 32,
        fontSize: 12,
        fontWeight: 600
    },
    popover: {
        width: 'max-content'
    },
    popoverContent: {
        width: 200,
        padding: 10,
        borderRadius: 8
    },
    marginBottom20: {
        marginBottom: 20
    },
    marginLeftAuto: {
        marginLeft: 'auto'
    },
    chipText: {
        textTransform: 'capitalize' as const
    }
};
