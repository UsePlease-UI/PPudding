import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppsListFilled } from '@fluentui/react-icons';

import Backdrop from '@components/Base/Backdrop';
import Button from '@components/Button/Button';
import IconButton from '@components/Button/IconButton';

import useMobile from '@hooks/useMobile';

import { COMPONENT_LIST, DEMO_LIST } from './constants';

type MenuType = {
    onClick: () => void;
};
const Menu = ({ onClick }: MenuType) => {
    const { isTablet } = useMobile();
    const [isOpen, setIsOpen] = useState(false);

    return isTablet ? (
        <div className="absolute right-2.5">
            <IconButton size="small" variant="outlined" onClick={onClick}>
                <AppsListFilled className="h-inherit w-inherit text-inherit" />
            </IconButton>
        </div>
    ) : (
        <div className="absolute right-5 top-6">
            <Button size="small" variant="contained" onClick={() => setIsOpen((prev) => !prev)}>
                <strong>MENU</strong>
            </Button>
            <Backdrop canFocusTrap isDimmed isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <nav className="absolute right-5 top-14.25 flex w-max flex-col items-start gap-5 rounded bg-white p-5">
                    {[{ name: 'Components', list: COMPONENT_LIST }].map((val) => (
                        <div key={val.name} className="relative max-w-full rounded border border-primary-600">
                            <div className="absolute -top-3 left-2.5 w-max">
                                <h2 className="bg-white text-center text-16 font-black">{val.name}</h2>
                            </div>
                            <ul className="row-auto grid w-70 grid-cols-2 gap-1 p-3.5">
                                {val.list.map((component) => (
                                    <li
                                        key={component}
                                        className="group rounded font-medium hover:bg-primary-50 hover:font-semibold"
                                    >
                                        <Link
                                            className="block px-1 py-2 text-center text-12 capitalize outline-none focus:font-black focus:text-primary-800 focus:outline-none group-hover:text-primary-900"
                                            to={`/example/${component.toLowerCase()}`}
                                        >
                                            {component}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="relative max-w-full rounded border border-primary-600">
                        <div className="absolute -top-3 left-2.5 w-max">
                            <h2 className="bg-white text-center text-16 font-black">데모</h2>
                        </div>
                        <ul className="row-auto grid w-70 grid-cols-2 gap-1 p-3.5">
                            {DEMO_LIST.map((component) => (
                                <li
                                    key={component}
                                    className="group rounded font-medium hover:bg-primary-50 hover:font-semibold"
                                >
                                    <Link
                                        className="block px-1 py-2 text-center text-12 capitalize outline-none focus:font-black focus:text-primary-800 focus:outline-none group-hover:text-primary-900"
                                        to={`/demo/${component.toLowerCase()}`}
                                    >
                                        {component}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </Backdrop>
        </div>
    );
};

export default Menu;
