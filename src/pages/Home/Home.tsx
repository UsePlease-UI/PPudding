/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import Aside from './components/Aside';
import { COMPONENT_LIST } from './components/constants';
import Description from './components/Description';
import Header from './components/Header';
import { getComponents } from './examples/utils';

import { css } from '@emotion/react';
import palette from 'styles/palette';

const layoutStyle = css({
    margin: '0 auto',
    backgroundColor: palette.primary.main
});

const mainStyle = css({
    marginTop: 80,
    padding: 60,
    transition: 'margin 0.5s ease-in-out',
    '@media (max-width: 425px)': {
        padding: 20
    }
});

const sectionStyle = css({
    width: '100%',
    maxWidth: 1536,
    margin: '0 auto',
    padding: 40,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    '@media (max-width: 425px)': {
        padding: 10,
        minHeight: 'calc(100vh - 120px)'
    }
});

export default function Home() {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(COMPONENT_LIST[0]);

    return (
        <div css={layoutStyle}>
            <Header show={show} onClick={() => setShow((prev) => !prev)} />
            <Aside
                show={show}
                selected={selected}
                onClose={() => setShow((prev) => !prev)}
                onClick={(e) => {
                    setSelected(e.currentTarget.value);
                    setShow(false);
                }}
            />
            <main
                css={css([
                    mainStyle,
                    {
                        marginLeft: show ? 240 : 0,
                        '@media (max-width: 768px)': {
                            marginLeft: 0
                        }
                    }
                ])}
            >
                <section css={sectionStyle}>
                    <Description component={selected} />
                    {getComponents(selected)}
                </section>
            </main>
        </div>
    );
}
