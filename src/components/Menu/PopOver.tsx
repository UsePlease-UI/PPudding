/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

import { popoverStyle } from './styles';

type PopoverType = {
    isOpen: boolean;
    children: JSX.Element;
    customCSS?: CSSInterpolation;
};

/**
 *  [UI Component] PopOver Component
 *  @param isOpen: popover 상태를 나타내는 변수
 *  @param children: popover 컴포넌트의 children
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */

export default function PopOver({ children, isOpen, customCSS }: PopoverType) {
    return isOpen ? <div css={css([popoverStyle.popover, customCSS])}>{children}</div> : null;
}
