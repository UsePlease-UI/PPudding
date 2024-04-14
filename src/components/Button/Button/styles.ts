import { ShapeType, SizeType, commonStyle } from '../styles';

export const buttonStyle = {
    small: 'min-h-32 h-max min-w-48 w-max px-12 py-4 text-14 leading-14 font-normal child-svg:w-16 child-svg:h-16',
    medium: 'min-h-40 h-max min-w-56 w-max px-16 py-4 text-16 leading-16 font-medium child-svg:w-18 child-svg:h-18',
    large: 'min-h-45 h-max min-w-96 w-max px-16 py-4 text-18 leading-18 font-medium child-svg:w-20 child-svg:h-20',
    smallCircular: 'min-w-32 min-h-32 text-12 leading-12 rounded-full p-0',
    mediumCircular: 'min-w-40 min-h-40 text-14 leading-14 rounded-full p-0',
    largeCircular: 'min-w-45 min-h-45 text-16 leading-16 rounded-full p-0'
};

export function getSizeStyle(size?: SizeType) {
    return size ? buttonStyle[size] : null;
}

export function getIconShapeStyle(shape: ShapeType = 'rounded') {
    return shape ? commonStyle[shape] : commonStyle.rounded;
}

export function getShapeStyle(size?: SizeType, shape: ShapeType = 'rounded') {
    if (shape === 'circular') {
        switch (size) {
            case 'large':
                return buttonStyle.largeCircular;
            case 'medium':
                return buttonStyle.mediumCircular;
            default:
                return buttonStyle.smallCircular;
        }
    }

    return commonStyle[shape];
}
