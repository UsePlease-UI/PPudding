export type RadioSizeType = 'large' | 'medium' | 'small';
export type RadioPositionType = 'end' | 'start';
export declare function getSizeStyle(size?: RadioSizeType): {
    container: string;
    default: string;
    leftText: string;
    rightText: string;
};
