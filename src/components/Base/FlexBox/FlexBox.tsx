import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import { joinClassNames } from '@utils/format';

import { BaseStyleType } from '../types';

type FlexBoxType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> &
    BaseStyleType & {
        children: ReactNode;
        flexDirection?: string;
        alignItems?: string;
        alignSelf?: string;
        alignContent?: string;
        justifyContent?: string;
        justifySelf?: string;
        justifyItems?: string;
        gap?: string;
        flex?: string;
        flexWrap?: string;
    };

/**
 *  [Base Component] FlexBox
 *  @param children 컴포넌트
 *  @param flexDirection [TailwindCSS] flex-direction
 *  @param alignItems [TailwindCSS] align-items
 *  @param justifyContent [TailwindCSS] justify-content
 *  @param gap [TailwindCSS] gap
 *  @param flex [TailwindCSS] flex
 *  @param flexWrap [TailwindCSS] flex wrap
 *  @returns JSX.Element
 */
const FlexBox = forwardRef<HTMLDivElement, FlexBoxType>(function FlexBox(props, ref) {
    const {
        children,
        flexDirection,
        alignItems,
        alignSelf,
        alignContent,
        justifyContent,
        justifyItems,
        justifySelf,
        gap,
        flex,
        flexWrap,
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
        ...rest
    } = props;

    return (
        <div
            ref={ref}
            {...rest}
            className={joinClassNames(
                'flex',
                justifyContent,
                justifyItems,
                justifySelf,
                alignItems,
                alignSelf,
                alignContent,
                flexDirection,
                gap,
                flex,
                flexWrap,
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
});

export default FlexBox;
