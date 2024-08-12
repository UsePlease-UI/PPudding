import { ShapeType, SizeType, commonStyle } from '../styles';

export const buttonStyle = {
    small: 'min-h-8 h-max min-w-12 w-max px-3 py-1 text-14 leading-14 font-normal child-svg:w-4 child-svg:h-4',
    medium: 'min-h-10 h-max min-w-14 w-max px-4 py-1 text-16 leading-16 font-medium child-svg:w-4.5 child-svg:h-4.5',
    large: 'min-h-11.25 h-max min-w-24 w-max px-4 py-1 text-18 leading-18 font-medium child-svg:w-5 child-svg:h-5',
    smallCircular: 'min-w-8 min-h-8 text-3 leading-3 rounded-full p-0',
    mediumCircular: 'min-w-10 min-h-10 text-14 leading-14 rounded-full p-0',
    largeCircular: 'min-w-11.25 min-h-11.25 text-16 leading-16 rounded-full p-0'
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
