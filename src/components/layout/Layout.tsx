/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from 'react';

import Block from 'components/atoms/Block';
import BlockWrapper from 'components/atoms/BlockWrapper';
import FlexBox from 'components/atoms/FlexBox';
import PopOver from 'components/atoms/PopOver';
import TextField from 'components/atoms/TextField';
import FormControl from 'components/molecules/FormControl';
import Select from 'components/molecules/Select';
import Pagination from 'components/organisms/Pagination';

import { css } from '@emotion/react';
import palette from 'styles/palette';

const COMPONENT_LIST = ['Pagination', 'PopOver', 'Select', 'TextField'];

const OPTIONS = [
    { label: '선택', value: '' },
    { label: '딸기', value: '1' },
    { label: '바나나', value: '2' },
    { label: '초코', value: '3' },
    { label: '우유', value: '4' }
];

const layoutStyle = css({
    maxWidth: 1200,
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '20px 0'
});

const componentStyle = css({
    marginTop: 20,
    display: 'flex'
});

const popoverStyle = css({
    height: 30,
    fontWeight: 700,
    color: `${palette.lightBlue.main}`,
    border: `1px solid ${palette.lightBlue.main}`,
    borderRadius: 4
});

export default function Layout() {
    const [name, setName] = useState('');
    const [selected, setSelected] = useState(COMPONENT_LIST[0]);
    const [page, setPage] = useState<number>(1);
    const [blockNum, setBlockNum] = useState<number>(1);
    const [milk, setMilk] = useState('');
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isOpen = Boolean(anchorEl);

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handlePaginationChange = (newPage: number, newBlockNum: number) => {
        setPage(newPage);
        setBlockNum(newBlockNum);
    };

    const handleClick = (e: any) => {
        setSelected(e);
    };

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        if (anchorEl) {
            setAnchorEl(null);
            document.body.style.overflow = 'auto';
        } else {
            setAnchorEl(e.currentTarget);
            document.body.style.overflow = 'hidden';
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <div css={layoutStyle}>
            <BlockWrapper>
                {COMPONENT_LIST.map((el: string) => (
                    <Block onClick={handleClick} name={el} selected={selected}>
                        {el}
                    </Block>
                ))}
            </BlockWrapper>
            <div css={componentStyle}>
                {selected === 'Pagination' && (
                    <FlexBox direction="column" gap={10}>
                        <h2>{selected}</h2>
                        <Pagination totalCount={32} page={page} blockNum={blockNum} onChange={handlePaginationChange} />
                    </FlexBox>
                )}
                {selected === 'PopOver' && (
                    <FlexBox direction="column" gap={10}>
                        <h2>{selected}</h2>
                        <button type="button" onClick={handleOpen} css={popoverStyle} ref={buttonRef}>
                            click me
                        </button>
                        {isOpen && (
                            <div css={css({ position: 'relative' })}>
                                <PopOver>
                                    <div>The contents of the Popover</div>
                                </PopOver>
                            </div>
                        )}
                    </FlexBox>
                )}
                {selected === 'Select' && (
                    <FlexBox direction="column" gap={10}>
                        <h2>{selected}</h2>
                        <FormControl
                            id="milk"
                            label="우유"
                            helperText="우유 종류를 선택해주세요"
                            helperTextId="milk-helper-text"
                        >
                            <Select
                                id="milk"
                                aria-labelledby="milk"
                                name="milk"
                                value={milk}
                                label={OPTIONS.filter((val) => val.value === milk)?.[0]?.label}
                                options={OPTIONS}
                                onChange={(e) => setMilk(e.currentTarget.value)}
                            />
                        </FormControl>
                    </FlexBox>
                )}
                {selected === 'TextField' && (
                    <FlexBox direction="column" gap={10}>
                        <h2>{selected}</h2>
                        <FormControl
                            id="name"
                            helperTextId="name-helper-text"
                            helperText="최소 10글자 이상 입력"
                            label="닉네임"
                        >
                            <TextField
                                title="이름"
                                name="name"
                                value={name}
                                maxLength={10}
                                onChange={(e) => setName(e.currentTarget.value)}
                                customCSS={css({ borderColor: 'hotpink' })}
                            />
                        </FormControl>
                    </FlexBox>
                )}
            </div>
        </div>
    );
}
