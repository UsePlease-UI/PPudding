export type ButtonSizeType = 'large' | 'medium' | 'small';
export type IconButtonSizeType = 'mini' | ButtonSizeType;
export type ButtonVariantType = 'contained' | 'outlined' | 'text';
export type ButtonShapeType = 'circular' | 'rounded' | 'square';
export declare const commonButtonStyle: {
    circular: string;
    contained: string;
    largeIcon: string;
    mediumIcon: string;
    miniIcon: string;
    outlined: string;
    rounded: string;
    smallIcon: string;
    square: string;
    text: string;
};
export declare function getCommonButtonVariantStyle(variant?: ButtonVariantType): string | null;
export declare function getIconButtonSizeStyle(size?: IconButtonSizeType): string;
export declare function getCommonButtonShapeStyle(shape?: ButtonShapeType): string;
