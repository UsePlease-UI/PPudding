import { HTMLAttributes, LabelHTMLAttributes, ReactNode, createElement } from 'react';

import { joinClassNames } from '@utils/format';

type BaseType = Omit<HTMLAttributes<HTMLElement>, 'className'> &
    Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className'>;
type VariantType =
    | 'text-h1'
    | 'text-h2'
    | 'text-h3'
    | 'text-h4'
    | 'text-h5'
    | 'text-h6'
    | 'text-b24'
    | 'text-b18'
    | 'text-b16'
    | 'text-b14'
    | 'text-b12'
    | 'text-c11'
    | 'text-c8';

type FontType = {
    variant?: VariantType;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    align?: string;
    textTransform?: string;
};

type TypographyType = BaseType &
    FontType & {
        children: ReactNode;
        component?: string;
        color?: string;
        backgroundColor?: string;
        width?: string;
        height?: string;
        margin?: string;
        padding?: string;
        display?: string;
    };

function getVariantStyle(variant: VariantType) {
    switch (variant) {
        case 'text-h1':
            return 'font-pretendard text-h1';
        case 'text-h2':
            return 'font-pretendard text-h2';
        case 'text-h3':
            return 'font-pretendard text-h3';
        case 'text-h4':
            return 'font-pretendard text-h4';
        case 'text-h5':
            return 'font-pretendard text-h5';
        case 'text-h6':
            return 'font-pretendard text-h6';
        case 'text-b24':
            return 'font-pretendard text-b24';
        case 'text-b18':
            return 'font-pretendard text-b18';
        case 'text-b14':
            return 'font-pretendard text-b14';
        case 'text-b12':
            return 'font-pretendard text-b12';
        case 'text-c11':
            return 'font-pretendard text-c11';
        case 'text-c8':
            return 'font-pretendard text-c8';
        default:
            return 'font-pretendard text-b16';
    }
}

function getFontStyle(styles: FontType) {
    const { variant, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, align, textTransform } = styles;
    if (variant) {
        return joinClassNames(getVariantStyle(variant), align, textTransform);
    }

    return joinClassNames(fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, align, textTransform);
}

/**
 *  [Base Component] Typography
 *  @param component 컴포넌트 type (h1, h2 ...)
 *  @param children 텍스트 | 컴포넌트
 *  @param width [TailwindCSS] Width
 *  @param height [TailwindCSS] Height
 *  @param padding [TailwindCSS] Padding
 *  @param margin [TailwindCSS] Margin
 *  @param fontFamily [TailwindCSS] Font Family
 *  @param fontSize [TailwindCSS] Font Size
 *  @param fontWeight [TailwindCSS] Font Weight
 *  @param lineHeight [TailwindCSS] Line Height
 *  @param letterSpacing [TailwindCSS] Letter Spacing
 *  @param align [TailwindCSS] Text Align
 *  @param textTransform [TailwindCSS] Text Transform
 *  @param color [TailwindCSS] Text Color
 *  @param backgroundColor [TailwindCSS] Background Color
 *  @param display [TailwindCSS] block | inline-block
 *  @returns JSX.Element
 */
export default function Typography(props: TypographyType) {
    const {
        component = 'p',
        variant,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        align,
        textTransform,
        color,
        backgroundColor,
        width,
        height,
        display,
        padding,
        margin,
        children,
        ...rest
    } = props;

    if (variant && (fontFamily || fontSize || fontWeight || lineHeight || letterSpacing)) {
        console.warn(
            'Cannot use variant with fontFamily, fontSize, fontWeight, lineHeight, letterSpacing. Consider adding a new typography style.'
        );
    }

    return (
        <>
            {createElement(
                component,
                {
                    className: joinClassNames(
                        getFontStyle({
                            variant,
                            fontFamily,
                            fontSize,
                            fontWeight,
                            lineHeight,
                            letterSpacing,
                            align,
                            textTransform
                        }),
                        display,
                        color,
                        backgroundColor,
                        width,
                        height,
                        padding,
                        margin
                    ),
                    ...rest
                },
                children
            )}
        </>
    );
}
