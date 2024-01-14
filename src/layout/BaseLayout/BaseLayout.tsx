/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { css } from '@emotion/react';

import Aside from './components/Aside';
import Header from './components/Header';
import { baseLayoutStyle } from './styles';

const DEFAULT_COMPONENT = 'Accordion';

const BaseLayout = () => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(DEFAULT_COMPONENT);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams) {
            setSelected(searchParams.get('component') || DEFAULT_COMPONENT);
        }
    }, [searchParams]);

    return (
        <div css={baseLayoutStyle.layout}>
            <Header show={show} onClick={() => setShow((prev) => !prev)} />
            <Aside
                show={show}
                selected={selected}
                onClose={() => setShow((prev) => !prev)}
                onClick={(e) => {
                    setShow(false);
                    setSelected(e.currentTarget.value);
                    setSearchParams({ component: e.currentTarget.value });
                }}
            />
            <main
                css={css([
                    baseLayoutStyle.main,
                    {
                        marginLeft: show ? 240 : 0
                    }
                ])}
            >
                <section css={baseLayoutStyle.section}>
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default BaseLayout;
