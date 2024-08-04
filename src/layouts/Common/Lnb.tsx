import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Backdrop } from '@components/Base';
import { IconButton } from '@components/Button';

import { DEMO_LIST, COMPONENT_LIST } from '@constants/constants';
import { DismissFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';
import { joinClassNames } from '@utils/format';

type LnbType = {
    isVisible: boolean;
    onClose: () => void;
};

export default function Lnb({ isVisible, onClose }: LnbType) {
    const { isTablet } = useMobile();
    const [searchParams] = useSearchParams();
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (searchParams) {
            setSelected(searchParams.get('component') || '');
        }
    }, [searchParams]);

    return (
        <Backdrop isOpen={isVisible} isDimmed backgroundColor="bg-black/80" onClose={onClose}>
            <div
                className={joinClassNames(
                    'pointer-events-none flex w-0 flex-col items-start overflow-y-auto bg-[unset] transition-all duration-500 ease-in-out',
                    isVisible && 'pointer-events-auto h-full w-full'
                )}
            >
                <nav className="absolute left-20 right-20 top-20 mx-auto flex h-[calc(100vh-40px)] max-w-[calc(500px-40px)] flex-col items-start gap-20 overflow-y-auto rounded bg-white p-20 pt-38">
                    <div className="absolute right-3 top-3 z-1 flex justify-end bg-white">
                        <IconButton
                            aria-label="close"
                            size={isTablet ? 'small' : 'medium'}
                            variant="text"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                        >
                            <DismissFilled />
                        </IconButton>
                    </div>
                    {[{ name: 'Components', list: COMPONENT_LIST }].map((val) => (
                        <div key={val.name} className="relative w-full rounded border border-primary-600">
                            <div className="absolute -top-18 left-10 w-max under-tablet:-top-13">
                                <h2 className="bg-white text-center text-24 font-black under-tablet:text-left under-tablet:text-16">
                                    {val.name}
                                </h2>
                            </div>
                            <ul className="row-auto grid w-full grid-cols-1 gap-4 p-20">
                                {val.list.map((component) => (
                                    <li
                                        key={component}
                                        className="group h-full w-full rounded bg-primary-50 font-medium hover:font-semibold"
                                    >
                                        <Link
                                            to={`/example/${component.toLowerCase()}`}
                                            className={joinClassNames(
                                                'block h-full w-full px-4 py-8 text-center group-hover:text-primary-900 group-hover:outline-none group-focus:text-primary-800 group-focus:outline-none',
                                                component === selected && 'font-semibold text-primary-800'
                                            )}
                                        >
                                            {component}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="relative w-full rounded border border-primary-600">
                        <div className="absolute -top-18 left-10 w-max under-tablet:-top-13">
                            <h2 className="bg-white text-center text-24 font-black under-tablet:text-left under-tablet:text-16">
                                데모
                            </h2>
                        </div>
                        <ul className="row-auto grid w-full grid-cols-1 gap-4 p-20">
                            {DEMO_LIST.map((demo) => (
                                <li
                                    key={demo}
                                    className="group h-full w-full rounded bg-primary-50 font-medium hover:font-semibold"
                                >
                                    <Link
                                        to={`/demo/${demo.toLowerCase()}`}
                                        className="block h-full w-full px-4 py-8 text-center capitalize group-hover:text-primary-900 group-hover:outline-none group-focus:text-primary-800 group-focus:outline-none"
                                    >
                                        {demo}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </Backdrop>
    );
}
