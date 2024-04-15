import { Link } from 'react-router-dom';

import { Typography } from '@components/Base';

import useMobile from '@hooks/useMobile';

import Menu from './Menu';

type GnbType = {
    onClick: () => void;
};
export default function Gnb({ onClick }: GnbType) {
    const { isTablet } = useMobile();

    return (
        <header className="fixed left-0 right-0 top-0 z-1 h-80 border-b border-b-white bg-primary-600 px-20 under-tablet:h-56 under-tablet:px-10">
            <div className="mx-auto flex size-full items-center justify-between">
                <Link to="/" className="flex items-center">
                    <Typography component="h1">
                        <svg
                            viewBox={`0 0 1200 ${isTablet ? '56' : '80'}`}
                            width="100%"
                            height={isTablet ? 56 : 80}
                            className=" fill-white"
                        >
                            <text
                                x="0"
                                y={isTablet ? '56' : '60'}
                                className="animate-stroke stroke-secondary-600 stroke-2 font-mono text-50 font-black tracking-[-5px] [stroke-dasharray:350] under-tablet:text-70"
                            >
                                {isTablet ? 'RC' : 'React Components'}
                            </text>
                        </svg>
                    </Typography>
                </Link>
                <Menu onClick={onClick} />
            </div>
        </header>
    );
}
