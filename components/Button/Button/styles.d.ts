import { ButtonShapeType, ButtonSizeType } from '../styles';
export declare const buttonStyle: {
    large: string;
    largeCircular: string;
    medium: string;
    mediumCircular: string;
    small: string;
    smallCircular: string;
};
export declare const getButtonSizeStyle: (size?: ButtonSizeType) => string | null;
export declare const getButtonIconShapeStyle: (shape?: ButtonShapeType) => string;
export declare const getButtonShapeStyle: (size?: ButtonSizeType, shape?: ButtonShapeType) => string | undefined;
