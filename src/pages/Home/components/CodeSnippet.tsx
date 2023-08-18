/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import FlexBox from 'components/Base/FlexBox';
import IconButton from 'components/Button/IconButton';

import { ACCORDION_CODE_SNIPPET, ACCORDION_SHORT } from '../snippets/accordion';
import { AUTOCOMPLETE_SHORT, AUTOCOMPLETE_CODE_SNIPPET } from '../snippets/autoComplete';
import { BUTTON_CODE_SNIPPET, BUTTON_SHORT_SNIPPET } from '../snippets/button';
import { CHECKBOX_CODE_SNIPPET, CHECKBOX_SHORT_SNIPPET } from '../snippets/checkbox';
import { CHIP_CODE_SNIPPET, CHIP_SHORT_SNIPPET } from '../snippets/chip';
import { DRAGNDROP_CODE_SNIPPET, DRAGNDROP_SHORT } from '../snippets/dragNdrop';
import { POPOVER_SHORT, POPOVER_CODE_SNIPPET } from '../snippets/popover';
import { SKELETON_CODE_SNIPPET } from '../snippets/skeleton';

import { css } from '@emotion/react';
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import palette from 'styles/palette';

const codeContainerStyle = css({ width: '100%', overflow: 'hidden', borderRadius: 5 });

const CODE_SNIPPET = {
    Accordion: {
        short: ACCORDION_SHORT,
        full: ACCORDION_CODE_SNIPPET
    },
    AutoComplete: {
        short: AUTOCOMPLETE_SHORT,
        full: AUTOCOMPLETE_CODE_SNIPPET
    },
    Button: {
        short: BUTTON_SHORT_SNIPPET,
        full: BUTTON_CODE_SNIPPET
    },
    Checkbox: {
        short: CHECKBOX_SHORT_SNIPPET,
        full: CHECKBOX_CODE_SNIPPET
    },
    Chip: {
        short: CHIP_SHORT_SNIPPET,
        full: CHIP_CODE_SNIPPET
    },
    DragNDrop: {
        short: DRAGNDROP_SHORT,
        full: DRAGNDROP_CODE_SNIPPET
    },
    PopOver: {
        short: POPOVER_SHORT,
        full: POPOVER_CODE_SNIPPET
    },
    Skeleton: {
        short: SKELETON_CODE_SNIPPET,
        full: SKELETON_CODE_SNIPPET
    }
};

type CodeSnippetType = {
    component: string;
};

type ComponentType = keyof typeof CODE_SNIPPET;

export default function CodeSnippet({ component }: CodeSnippetType) {
    const componentName = component as ComponentType;
    const [showCode, setShowCode] = useState(false);

    return CODE_SNIPPET[componentName] ? (
        <FlexBox direction="column" gap={5} alignItems="flex-end" customCSS={{ margin: '10px 20px 20px' }}>
            <IconButton
                type="button"
                aria-label="View Full Code Snippet"
                onClick={() => setShowCode((prev) => !prev)}
                customCSS={{
                    width: 28,
                    height: 28,
                    color: showCode ? palette.secondary.main : palette.primary.main
                }}
            >
                <CodeBracketSquareIcon />
            </IconButton>
            <div css={codeContainerStyle}>
                {showCode ? (
                    <SyntaxHighlighter style={nightOwl} language="typescript">
                        {CODE_SNIPPET[componentName].full}
                    </SyntaxHighlighter>
                ) : (
                    <SyntaxHighlighter style={nightOwl} language="typescript">
                        {CODE_SNIPPET[componentName].short}
                    </SyntaxHighlighter>
                )}
            </div>
        </FlexBox>
    ) : null;
}
