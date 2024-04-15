export type SizeType = 'small' | 'medium' | 'large';

const sizeStyle = {
    smallContainer: 'w-28 h-28 p-4',
    smallText: 'text-12 ml-2',
    smallDefault: 'w-16 h-16 m-2 *:w-6 *:h-6',
    mediumContainer: 'w-32 h-32 p-4',
    mediumText: 'text-16 ml-4',
    mediumDefault: 'w-20 h-20 m-2 *:w-10 *:h-10',
    largeContainer: 'w-36 h-36 p-4',
    largeText: 'text-20 ml-8',
    largeDefault: 'w-24 h-24 m-2 *:w-12 *:h-12'
};

export function getSizeStyle(size?: SizeType) {
    switch (size) {
        case 'medium':
            return {
                text: sizeStyle.mediumText,
                default: sizeStyle.mediumDefault,
                container: sizeStyle.mediumContainer
            };
        case 'large':
            return {
                text: sizeStyle.largeText,
                default: sizeStyle.largeDefault,
                container: sizeStyle.largeContainer
            };
        default:
            return {
                text: sizeStyle.smallText,
                default: sizeStyle.smallDefault,
                container: sizeStyle.smallContainer
            };
    }
}
