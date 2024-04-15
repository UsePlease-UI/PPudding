import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import { BaseStyleType } from '../types';

export type BoxType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> &
    BaseStyleType & {
        children?: ReactNode;
    };

/**
 *  [Base Component] Box
 *  @param children ReactNode
 *  @param width [TailwindCSS] Width
 *  @param minWidth [TailwindCSS] Min Width
 *  @param maxWidth [TailwindCSS] Max Width
 *  @param height [TailwindCSS] Height
 *  @param minHeight [TailwindCSS] Min Height
 *  @param maxHeight [TailwindCSS] Max Height
 *  @param margin [TailwindCSS] Margin
 *  @param padding [TailwindCSS] Padding
 *  @param border [TailwindCSS] Border Width + Border Style
 *  @param borderColor [TailwindCSS] Border Color
 *  @param borderRadius [TailwindCSS] Border Radius
 *  @param backgroundColor [TailwindCSS] Background Color
 *  @returns JSX.Element
 */
const Box = (props: BoxType) => {
    const {
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        backgroundColor,
        padding,
        margin,
        border,
        borderColor,
        borderRadius,
        children
    } = props;

    return (
        <div
            className={joinClassNames(
                width,
                minWidth,
                maxWidth,
                height,
                minHeight,
                maxHeight,
                backgroundColor,
                padding,
                margin,
                border,
                borderColor,
                borderRadius
            )}
        >
            {children}
        </div>
    );
};

export default Box;
