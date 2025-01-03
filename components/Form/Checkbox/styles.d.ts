export type CheckboxSizeType = 'large' | 'medium' | 'small';
export type CheckboxPositionType = 'end' | 'start';
export declare function getSizeStyle(size?: CheckboxSizeType): {
    custom: string;
    default: string;
    text: string;
};
