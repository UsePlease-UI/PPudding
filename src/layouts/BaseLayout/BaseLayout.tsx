import { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Lnb, Gnb } from '@layouts/Common';

import useMobile from '@hooks/useMobile';

export default function BaseLayout() {
    const { isTablet } = useMobile();
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Gnb onClick={() => setIsVisible((prev) => !prev)} />
            <div className="bg-white">
                {isTablet && <Lnb isVisible={isVisible} onClose={() => setIsVisible((prev) => !prev)} />}
                <main className="mt-80 min-h-[calc(100vh-80px)] p-20 transition-all duration-500 ease-in-out under-tablet:ml-0 under-tablet:mt-56 under-tablet:min-h-[calc(100vh-56px)] under-tablet:p-0">
                    <section className="max-w-screen-4k:overflow-hidden mx-auto w-full max-w-screen-laptop rounded bg-white p-20 under-tablet:min-h-inherit under-tablet:rounded-none under-tablet:p-10">
                        <Outlet />
                    </section>
                </main>
                <ScrollRestoration />
            </div>
        </>
    );
}
