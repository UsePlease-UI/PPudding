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
        <header className="fixed left-0 right-0 top-0 z-1 h-80 border-b border-b-primary-100 bg-white px-20 tablet:shadow-02 under-tablet:h-56 under-tablet:px-10">
            <div className="mx-auto flex size-full items-center justify-between">
                <Link to="/" className="flex items-center gap-10 hover:opacity-80">
                    <img
                        width={isTablet ? 50 : 30}
                        height="100%"
                        src={LogoImage}
                        alt="logo"
                        className="w-30 tablet:w-50"
                    />
                    <h1 className="logo text-30 font-black tablet:text-40">PPUDDING</h1>
                </Link>
                <Menu onClick={onClick} />
            </div>
        </header>
    );
}
