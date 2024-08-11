import { commonStyle } from '../styles';

export type SizeType = 'small' | 'medium' | 'large';

const sizeStyle = {
    miniText: 'p-1.25 text-12 font-semibold',
    smallText: 'p-1.5 text-14',
    mediumText: 'p-2 text-16',
    largeText: 'p-[8.5px] text-18'
};

export function getSizeStyle(size?: SizeType) {
    switch (size) {
        case 'small':
            return { icon: commonStyle.smallIcon, text: sizeStyle.smallText };
        case 'medium':
            return { icon: commonStyle.mediumIcon, text: sizeStyle.mediumText };
        case 'large':
            return { icon: commonStyle.largeIcon, text: sizeStyle.largeText };
        default:
            return { icon: commonStyle.miniIcon, text: sizeStyle.miniText };
    }
}
