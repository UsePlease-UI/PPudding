/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import FlexBox from '@atoms/FlexBox';
import Typography from '@atoms/Typography';
import Accordion from '@molecules/Accordion';
import AccordionHeader from '@molecules/AccordionHeader';
import AccordionPanel from '@molecules/AccordionPanel';
import IconButton from '@molecules/IconButton';

import { ACCORDION_CODE_SNIPPET, ACCORDION_SHORT } from 'code/accordion';

import { css, keyframes } from '@emotion/react';
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import palette from '@styles/palette';

const linkStyle = css({
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    color: palette.primary.main,
    backgroundColor: '#ffffff',
    border: `1px dashed ${palette.primary.main}`,
    '& h2': { fontSize: 14 }
});

const blink = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
`;

const linkIconStyle = css({
    width: 40,
    height: 40,
    marginRight: 15,
    display: 'inline-block',
    fontFamily: 'cursive',
    fontSize: 24,
    lineHeight: '40px',
    fontWeight: 900,
    textAlign: 'center',
    border: '1px solid #eeeeee',
    borderRadius: 4,
    animation: `${blink} 2s ease-in-out infinite`
});

const codeContainerStyle = css({ width: '100%', overflow: 'hidden', borderRadius: 5 });

export default function AccordionExample() {
    const [showCode, setShowCode] = useState(false);
    const [panel, setPanel] = useState('panel1');

    // Reference : https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript
    // *함수를 return하는 함수
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleChange =
        (selectedPanel: string) => (_event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => {
            // eslint-disable-next-line no-console
            console.log('i am controlled!', selectedPanel);
            // eslint-disable-next-line no-console
            console.log('i am currently expanded', isExpanded);
            setPanel(selectedPanel);
        };

    return (
        <>
            <Link to="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/" target="_blank" css={linkStyle}>
                <Typography component="span" customCSS={linkIconStyle}>
                    A
                </Typography>
                <div>
                    <Typography component="h2">Accordion</Typography>
                    <Typography component="p">A component with show / hide functionality</Typography>
                </div>
            </Link>
            <FlexBox direction="column" customCSS={{ margin: 20 }}>
                <Accordion isExpanded={panel === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionHeader index={1}>Controlled - Question 1</AccordionHeader>
                    <AccordionPanel index={1}>Apple</AccordionPanel>
                </Accordion>
                <Accordion>
                    <AccordionHeader index={2}>Uncontrolled - Question 2</AccordionHeader>
                    <AccordionPanel index={2}>Banana</AccordionPanel>
                </Accordion>
            </FlexBox>
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
                            {ACCORDION_CODE_SNIPPET}
                        </SyntaxHighlighter>
                    ) : (
                        <SyntaxHighlighter style={nightOwl} language="typescript">
                            {ACCORDION_SHORT}
                        </SyntaxHighlighter>
                    )}
                </div>
            </FlexBox>
        </>
    );
}
