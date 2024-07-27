import { Link } from 'react-router-dom';

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
                <Link to="/" className="flex items-center">
                    <h1>
                        <svg
                            viewBox={`0 0 1200 ${isTablet ? '56' : '80'}`}
                            width="100%"
                            height={isTablet ? 56 : 80}
                            className=" fill-primary-600"
                        >
                            <text
                                x="0"
                                y={isTablet ? '56' : '60'}
                                className="animate-stroke stroke-white font-mono text-50 font-black tracking-[-5px] [stroke-dasharray:350] under-tablet:text-70"
                            >
                                {isTablet ? 'RC' : 'React Components'}
                            </text>
                        </svg>
                    </h1>
                </Link>
                <Menu onClick={onClick} />
            </div>
        </header>
    );
}
