import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Backdrop, Typography } from '@components/Base';
import { Button, IconButton } from '@components/Button';

import { A_LIST, DEMO_LIST, K_LIST } from '@constants/constants';
import { AppsListFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

type MenuType = {
    onClick: () => void;
};
const Menu = ({ onClick }: MenuType) => {
    const { isTablet } = useMobile();
    const [isOpen, setIsOpen] = useState(false);

    return isTablet ? (
        <div className="absolute right-10">
            <IconButton size="small" variant="outlined" onClick={onClick}>
                <AppsListFilled className="h-inherit w-inherit text-inherit" />
            </IconButton>
        </div>
    ) : (
        <div className="absolute right-20 top-24">
            <Button size="small" variant="outlined" onClick={() => setIsOpen((prev) => !prev)}>
                <strong>MENU</strong>
            </Button>
            <Backdrop isOpen={isOpen} canFocusTrap isDimmed onClose={() => setIsOpen(false)}>
                <nav className="absolute right-20 top-57 flex w-max flex-col items-start gap-20 rounded bg-white p-20">
                    {[
                        { name: 'akffkdahffkdgo77', list: A_LIST },
                        { name: 'Kimyerim1935', list: K_LIST }
                    ].map((val) => (
                        <div key={val.name} className="relative max-w-full rounded border border-primary-600">
                            <div className="absolute -top-12 left-10 w-max">
                                <Typography
                                    component="h2"
                                    fontSize="text-16"
                                    fontWeight="font-black"
                                    align="text-center"
                                    backgroundColor="bg-white"
                                >
                                    {val.name}
                                </Typography>
                            </div>
                            <ul className="row-auto grid w-280 grid-cols-2 gap-4 p-14">
                                {val.list.map((component) => (
                                    <li
                                        key={component}
                                        className="group rounded font-medium hover:bg-primary-50 hover:font-semibold"
                                    >
                                        <Link
                                            to={`/example/${component.toLowerCase()}`}
                                            className="block px-4 py-8 text-center text-12 capitalize outline-none focus:font-black focus:text-primary-600 focus:outline-none group-hover:text-primary-600"
                                        >
                                            {component}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="relative max-w-full rounded border border-primary-600">
                        <div className="absolute -top-12 left-10 w-max">
                            <Typography
                                component="h2"
                                fontSize="text-16"
                                fontWeight="font-black"
                                align="text-center"
                                backgroundColor="bg-white"
                            >
                                데모
                            </Typography>
                        </div>
                        <ul className="row-auto grid w-280 grid-cols-2 gap-4 p-14">
                            {DEMO_LIST.map((component) => (
                                <li
                                    key={component}
                                    className="group rounded font-medium hover:bg-primary-50 hover:font-semibold"
                                >
                                    <Link
                                        to={`/demo/${component.toLowerCase()}`}
                                        className="block px-4 py-8 text-center text-12 capitalize outline-none focus:font-black focus:text-primary-600 focus:outline-none group-hover:text-primary-600"
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
