import { joinClassNames } from '@utils/format';

import { commonStyle, ShapeType, SizeType } from '../styles';

export const buttonStyle = {
    small: joinClassNames(
        'h-max min-h-8 w-max min-w-12 px-3 py-1 text-14 font-normal leading-14 child-svg:h-4 child-svg:w-4',
    ),
    medium: joinClassNames(
        'h-max min-h-10 w-max min-w-14 px-4 py-1 text-16 font-medium leading-16 child-svg:h-4.5 child-svg:w-4.5',
    ),
    large: joinClassNames(
        'h-max min-h-11.25 w-max min-w-24 px-4 py-1 text-18 font-medium leading-18 child-svg:h-5 child-svg:w-5',
    ),
    smallCircular: joinClassNames('min-h-8 min-w-8 rounded-full p-0 text-3 leading-3'),
    mediumCircular: joinClassNames('min-h-10 min-w-10 rounded-full p-0 text-14 leading-14'),
    largeCircular: joinClassNames('min-h-11.25 min-w-11.25 rounded-full p-0 text-16 leading-16'),
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
