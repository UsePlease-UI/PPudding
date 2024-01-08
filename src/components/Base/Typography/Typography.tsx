/** @jsxImportSource @emotion/react */
import { HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import { css, jsx } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

type BaseType = HTMLAttributes<HTMLElement> & LabelHTMLAttributes<HTMLLabelElement> & CustomCSSType;

type TypographyType = BaseType & {
    component: string;
    children: ReactNode;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
    color?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    gutterBottom?: number;
};

/**
 *  [UI Component] Typography
 *  @param component 컴포넌트 type (h1, h2 ...)
 *  @param children 텍스트 | 컴포넌트
 *  @param fontFamily [CSS] Font Family [optional]
 *  @param fontSize [CSS] Font Size [optional]
 *  @param fontWeight [CSS] Font Weight [optional]
 *  @param lineHeight [CSS] Line Height [optional]
 *  @param letterSpacing [CSS] Letter Spacing [optional]
 *  @param align [CSS] Text Align [optional]
 *  @param textTransform [CSS] Text Transform [optional]
 *  @param color [CSS] Text Color [optional]
 *  @param backgroundColor [CSS] Background Color [optional]
 *  @param width [CSS] Width [optional]
 *  @param height [CSS] Height [optional]
 *  @param gutterBottom [CSS] Margin Bottom [optional]
 *  @param customCSS 커스텀 css [optional]
 *  @returns EmotionJSX.Element
 */
export default function Typography(props: TypographyType) {
    const {
        component,
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
        gutterBottom,
        customCSS,
        children,
        ...rest
    } = props;

    return (
        <>
            {jsx(
                component,
                {
                    css: css([
                        {
                            fontFamily,
                            fontSize,
                            fontWeight,
                            letterSpacing,
                            lineHeight,
                            textTransform,
                            textAlign: align,
                            color,
                            backgroundColor,
                            width,
                            height,
                            gutterBottom
                        },
                        customCSS
                    ]),
                    ...rest
                },
                children
            )}
        </>
    );
}
