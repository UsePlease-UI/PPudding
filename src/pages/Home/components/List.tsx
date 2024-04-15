import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { FlexBox, Typography } from '@components/Base';
import IconButton from '@components/Button/IconButton';

import { ChevronLeftFilled, ChevronRightFilled } from '@fluentui/react-icons';

type ListType = {
    data: string[];
};

export default function List({ data }: ListType) {
    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const listWidth = window.innerWidth < 769 ? 260 : 313;
            const num = Math.floor((document.body.clientWidth - 40) / listWidth) || 1;
            setOffset(window.innerWidth > 1536 ? Math.min(num, 4) : num);
            setTotalPage(Math.ceil(data.length / (window.innerWidth > 1536 ? Math.min(num, 4) : num)));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [data.length]);

    const list = useMemo(() => data.slice((page - 1) * offset, page * offset), [data, page, offset]);

    return (
        <FlexBox flexDirection="flex-col" width="w-full" margin="mx-auto">
            <FlexBox
                gap={list.length < 3 ? 'gap-10' : 'gap-0'}
                justifyContent={
                    offset === 1 ? 'justify-center' : list.length >= 3 ? 'justify-between' : 'justify-start'
                }
            >
                {list.map((name) => (
                    <FlexBox
                        key={name}
                        flexDirection="flex-col"
                        style={{
                            width: offset === 1 ? '100%' : `calc(${(1 / offset) * 100}% - 10px)`
                        }}
                    >
                        <Link title="컴포넌트 확인하기" to={`/example/${name.toLowerCase()}`}>
                            <div className="relative pb-[57.69%]">
                                <div className="absolute top-0 flex h-full w-full items-center justify-center bg-primary-600 uppercase text-primary-50 hover:border-b-primary-600 hover:bg-primary-50 hover:text-primary-600">
                                    <Typography
                                        fontSize="text-28"
                                        fontWeight="font-black"
                                        align="text-center"
                                        color="text-inherit"
                                    >
                                        {name}
                                    </Typography>
                                </div>
                            </div>
                        </Link>
                    </FlexBox>
                ))}
            </FlexBox>
            {totalPage > 1 && (
                <FlexBox
                    gap="gap-20"
                    flex="flex-1"
                    alignItems="items-center"
                    justifyContent="justify-end"
                    margin="mt-20"
                >
                    <IconButton
                        size="small"
                        variant="outlined"
                        shape="circular"
                        onClick={() => setPage((prev) => (prev === 1 ? totalPage : prev - 1))}
                    >
                        <ChevronLeftFilled />
                    </IconButton>
                    <Typography fontSize="text-16" fontWeight="font-medium">
                        <strong className="text-primary-600">{page}</strong> / {totalPage}
                    </Typography>
                    <IconButton
                        size="small"
                        variant="outlined"
                        shape="circular"
                        onClick={() => setPage((prev) => (prev === totalPage ? 1 : prev + 1))}
                    >
                        <ChevronRightFilled />
                    </IconButton>
                </FlexBox>
            )}
        </FlexBox>
    );
}
