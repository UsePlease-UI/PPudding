/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import useMobile from 'hooks/useMobile';

import Aside from './components/Aside';
import Header from './components/Header';
import { baseLayoutStyle } from './styles';

const BaseLayout = () => {
    const isMobile = useMobile();

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div css={baseLayoutStyle.layout}>
            <Header onClick={() => setIsVisible((prev) => !prev)} />
            {isMobile && <Aside isVisible={isVisible} onClose={() => setIsVisible((prev) => !prev)} />}
            <main css={baseLayoutStyle.main}>
                <section css={baseLayoutStyle.section}>
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default BaseLayout;
