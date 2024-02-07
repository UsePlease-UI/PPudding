/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BeakerIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { palette } from 'styles';

import { FlexBox, Typography } from 'components/Base';
import IconButton from 'components/Button/IconButton';

type ListType = {
    data: string[];
};

export default function List({ data }: ListType) {
    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const listWidth = window.innerWidth < 768 ? 260 : 313;
            const num = Math.floor((document.body.clientWidth - 120 - 80) / listWidth) || listWidth;
            setWidth(listWidth);
            setOffset(num);
            setTotalPage(Math.ceil(data.length / num));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <FlexBox flexDirection="column">
            <FlexBox
                gap={20}
                customCSS={{
                    justifyContent: 'flex-start',
                    '@media (max-width:768px)': {
                        justifyContent: 'center'
                    }
                }}
            >
                {data.slice((page - 1) * offset, page * offset).map((name) => (
                    <FlexBox
                        key={name}
                        flexDirection="column"
                        customCSS={{
                            width,
                            border: `1px dashed ${palette.primary[600]}`
                        }}
                    >
                        <Typography
                            fontSize={28}
                            fontWeight="900"
                            height="150px"
                            lineHeight="150px"
                            align="center"
                            color={palette.primary[50]}
                            backgroundColor={palette.primary[600]}
                            customCSS={{
                                textTransform: 'uppercase',
                                borderBottom: `1px dashed ${palette.neutral.white}`,
                                '&:hover': {
                                    color: palette.primary[600],
                                    backgroundColor: palette.primary[50],
                                    borderBottom: `1px dashed ${palette.primary[600]}`
                                }
                            }}
                        >
                            {name}
                        </Typography>
                        <FlexBox gap={10} alignItems="center" justifyContent="flex-end" customCSS={{ padding: 5 }}>
                            {/* <Link title="가이드 보기" to={`/guide/${name}`}>
                                <DocumentTextIcon
                                    width={24}
                                    height={24}
                                    color={palette.primary[600]}
                                    css={{ '&:hover': { strokeWidth: 2 } }}
                                />
                            </Link> */}
                            <Link title="컴포넌트 확인하기" to={`/example/${name.toLowerCase()}`}>
                                <BeakerIcon
                                    width={24}
                                    height={24}
                                    color={palette.primary[600]}
                                    css={{ '&:hover': { strokeWidth: 2 } }}
                                />
                            </Link>
                        </FlexBox>
                    </FlexBox>
                ))}
            </FlexBox>
            {totalPage > 1 && (
                <FlexBox gap={20} flex="1" alignItems="center" justifyContent="flex-end" customCSS={{ marginTop: 20 }}>
                    <IconButton
                        size="small"
                        variant="outlined"
                        shape="circular"
                        onClick={() => setPage((prev) => (prev === 1 ? totalPage : prev - 1))}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    <Typography fontSize={16}>
                        {page} / {totalPage}
                    </Typography>
                    <IconButton
                        size="small"
                        variant="outlined"
                        shape="circular"
                        onClick={() => setPage((prev) => (prev === totalPage ? 1 : prev + 1))}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </FlexBox>
            )}
        </FlexBox>
    );
}
