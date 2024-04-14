export function getPositionStyle(position?: string) {
    switch (position) {
        case 'top-right':
            return 'top-20 right-20';
        case 'top-left':
            return 'top-20 left-20';
        case 'top-center':
            return 'top-20 left-1/2 -translate-x-1/2';
        case 'bottom-left':
            return 'bottom-20 left-20';
        case 'bottom-center':
            return 'bottom-20 left-1/2 -translate-x-1/2';
        default:
            return 'bottom-20 right-20';
    }
}
