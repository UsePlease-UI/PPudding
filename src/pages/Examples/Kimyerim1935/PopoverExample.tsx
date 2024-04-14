import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { FlexBox, Typography } from '@components/Base';
import { Button } from '@components/Button';
import Popover from '@components/Popover';

import useMobile from '@hooks/useMobile';

// FIXME: handleClickOutside 수정
export default function PopoverExample() {
    const { isTablet } = useMobile();

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isOpen = Boolean(anchorEl);

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        if (anchorEl) {
            setAnchorEl(null);
            document.body.style.overflow = 'auto';
        } else {
            setAnchorEl(e.currentTarget);
            document.body.style.overflow = 'hidden';
        }
    };

    const handleClose = () => setAnchorEl(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && !buttonRef.current?.contains(event.target as Node)) {
                handleClose();
                document.body.style.overflow = 'auto';
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <FlexBox flexDirection="flex-col" gap="gap-10">
            <Typography
                component="h2"
                fontSize="text-24"
                fontWeight="font-black"
                color="text-primary-600"
                textTransform="uppercase"
                margin={isTablet ? 'mb-10' : 'mb-20'}
            >
                Popover Playground
            </Typography>
            <div className="shadow03 flex w-full items-center justify-center rounded border border-primary-100 p-20">
                <Button variant="outlined" size="large" type="button" ref={buttonRef} onClick={handleOpen}>
                    메뉴 보기
                </Button>
                <Popover isOpen={isOpen}>
                    <ul className="py-4">
                        <li className="group h-40 w-full border-b border-b-primary-600 last:border-b-0">
                            <Link
                                to="/"
                                className="inline-block w-full leading-40 text-primary-600 group-hover:text-primary-700"
                            >
                                Hello
                            </Link>
                        </li>
                        <li className="group h-40 w-full border-b border-b-primary-600 last:border-b-0">
                            <Link to="/" className="inline-block w-full leading-40 text-primary-600">
                                Hi
                            </Link>
                        </li>
                    </ul>
                </Popover>
            </div>
        </FlexBox>
    );
}
