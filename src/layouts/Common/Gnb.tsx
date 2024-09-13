import { Link } from 'react-router-dom';

import { LogoImage } from '@assets/index';

import useMobile from '@hooks/useMobile';

import Menu from './Menu';

type GnbType = {
    onClick: () => void;
};
export default function Gnb({ onClick }: GnbType) {
    const { isTablet } = useMobile();

    return (
        <header className="fixed inset-x-0 top-0 z-1 h-20 border-b border-b-primary-100 bg-white px-5 tablet:shadow-02 under-tablet:h-14 under-tablet:px-2.5">
            <div className="mx-auto flex size-full items-center justify-between">
                <Link className="flex items-center gap-2.5 hover:opacity-80" to="/">
                    <img
                        alt="logo"
                        className="w-7.5 tablet:w-12.5"
                        height="100%"
                        src={LogoImage}
                        width={isTablet ? 50 : 30}
                    />
                    <h1 className="logo text-30 font-black tablet:text-40">PPudding</h1>
                </Link>
                <Menu onClick={onClick} />
            </div>
        </header>
    );
}
