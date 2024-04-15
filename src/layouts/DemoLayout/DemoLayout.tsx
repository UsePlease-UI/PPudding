import { useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import { Typography } from '@components/Base';

import useMobile from '@hooks/useMobile';

import Lnb from '../Common/Lnb';
import Menu from '../Common/Menu';

const NAME = {
    editor: 'Button Demo',
    faq: 'Accordion Demo',
    search: 'Form Demo',
    register: 'Form Demo'
};

export default function DemoLayout() {
    const { pathname } = useLocation();
    const { isTablet } = useMobile();
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => setIsVisible((prev) => !prev);

    return (
        <>
            <header className="sticky left-0 right-0 top-0 z-10 flex h-80 items-center border-b border-primary-600 bg-white px-20 py-10 tablet:shadow-02">
                <Typography
                    component="h1"
                    display="desktop:hidden"
                    fontSize="text-24 desktop:text-56"
                    fontWeight="font-black"
                    align="text-center"
                    color="text-primary-600 desktop:text-white"
                    textTransform="uppercase"
                >
                    {NAME[pathname.split('/demo/')[1] as keyof typeof NAME]}
                </Typography>
                <Menu onClick={handleClick} />
            </header>
            <aside className="fixed bottom-0 left-0 top-0 z-10 hidden h-auto items-center justify-center bg-primary-600 desktop:flex desktop:w-320">
                <Typography
                    component="h1"
                    fontSize="text-24 desktop:text-48"
                    fontWeight="font-black"
                    align="text-center"
                    color="text-primary-600 desktop:text-white"
                    textTransform="uppercase"
                >
                    {NAME[pathname.split('/demo/')[1] as keyof typeof NAME]}
                </Typography>
            </aside>
            {isTablet && <Lnb isVisible={isVisible} onClose={handleClick} />}
            <main className="w-full bg-white tablet:p-80 desktop:ml-320 desktop:mr-auto desktop:w-[calc(100%-320px)]">
                <div className="mx-auto h-full min-h-inherit max-w-5xl desktop:mx-0 desktop:max-w-full">
                    <Outlet />
                </div>
            </main>
            <ScrollRestoration />
        </>
    );
}
