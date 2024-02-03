/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { palette } from 'styles';

import { FlexBox, Typography } from 'components/Base';
import Button from 'components/Button/Button';
import Chip from 'components/Button/Chip';
import { Checkbox, CheckboxGroup } from 'components/Form/Checkbox';
import { Radio, RadioGroup } from 'components/Form/Radio';
import TextField from 'components/Form/TextField';
import Popover from 'components/Shared/Popover';
import usePopOver from 'components/Shared/usePopover';
import useMobile from 'hooks/useMobile';

import { searchStyle } from './styles';

const Search = () => {
    const isMobile = useMobile();
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopOver();

    const [state, setState] = useState('Y');
    const [selected, setSelected] = useState<string[]>([]);
    const [confirmed, setConfirmed] = useState<{ state: typeof state; selected: typeof selected }>({
        state: '',
        selected: []
    });

    return (
        <FlexBox flexDirection="column">
            <FlexBox
                gap={10}
                flexDirection={isMobile ? 'column' : 'row'}
                justifyContent="center"
                alignItems={isMobile ? 'flex-start' : 'center'}
                customCSS={searchStyle.container}
            >
                <Typography fontSize={24} fontWeight="900" color={palette.primary[600]} customCSS={searchStyle.logo}>
                    RC
                </Typography>
                <TextField type="search" aria-label="검색" placeholder="검색어를 입력해 주세요" />
            </FlexBox>
            <FlexBox justifyContent="flex-end" flex="1" customCSS={searchStyle.moreButtonContainer}>
                <Button
                    hasEndIcon
                    icon={
                        isOpen ? <ChevronUpIcon width={12} height={12} /> : <ChevronDownIcon width={12} height={12} />
                    }
                    onClick={handleOpen}
                    customCSS={searchStyle.button}
                >
                    더보기
                </Button>
            </FlexBox>
            <Popover
                isOpen={isOpen}
                anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
                anchorElement={anchorElement}
                onClose={handleClose}
                customCSS={searchStyle.popover}
            >
                <FlexBox flexDirection="column" customCSS={searchStyle.popoverContent}>
                    <Typography component="p" fontWeight="600" gutterBottom={10}>
                        브랜드
                    </Typography>
                    <CheckboxGroup isRow={false} gap={10} customCSS={searchStyle.marginBottom20}>
                        <Checkbox
                            label="Channel"
                            value="channel"
                            checked={selected.includes('channel')}
                            onChange={() => {
                                if (selected.includes('channel')) {
                                    setSelected((prev) => prev.filter((val) => val !== 'channel'));
                                } else {
                                    setSelected((prev) => [...prev, 'channel']);
                                }
                            }}
                        />
                        <Checkbox
                            label="Gucci"
                            value="gucci"
                            checked={selected.includes('gucci')}
                            onChange={() => {
                                if (selected.includes('gucci')) {
                                    setSelected((prev) => prev.filter((val) => val !== 'gucci'));
                                } else {
                                    setSelected((prev) => [...prev, 'gucci']);
                                }
                            }}
                        />
                        <Checkbox
                            label="Prada"
                            value="prada"
                            checked={selected.includes('prada')}
                            onChange={() => {
                                if (selected.includes('prada')) {
                                    setSelected((prev) => prev.filter((val) => val !== 'prada'));
                                } else {
                                    setSelected((prev) => [...prev, 'prada']);
                                }
                            }}
                        />
                        <Checkbox
                            label="YSL"
                            value="ysl"
                            checked={selected.includes('ysl')}
                            onChange={() => {
                                if (selected.includes('ysl')) {
                                    setSelected((prev) => prev.filter((val) => val !== 'ysl'));
                                } else {
                                    setSelected((prev) => [...prev, 'ysl']);
                                }
                            }}
                        />
                    </CheckboxGroup>
                    <Typography component="p" fontWeight="600" gutterBottom={10}>
                        판매여부
                    </Typography>
                    <FlexBox customCSS={searchStyle.marginBottom20}>
                        <RadioGroup gap={20} value={state} onChange={(e) => setState(e.currentTarget.value)}>
                            <Radio name="state" label="판매 중" value="Y" />
                            <Radio name="state" label="품절" value="N" />
                        </RadioGroup>
                    </FlexBox>
                    <Button
                        variant="outlined"
                        size="medium"
                        customCSS={searchStyle.marginLeftAuto}
                        onClick={() => {
                            handleClose();
                            setConfirmed({ state, selected });
                        }}
                    >
                        적용
                    </Button>
                </FlexBox>
            </Popover>
            <FlexBox gap={10} flexWrap="wrap" customCSS={searchStyle.marginHorizontal20}>
                {confirmed.state && (
                    <Chip
                        label={confirmed.state === 'Y' ? '판매 중' : '품절'}
                        value={confirmed.state}
                        isDeletable
                        onDelete={() => setConfirmed((prev) => ({ ...prev, state: '' }))}
                    />
                )}
                {confirmed.selected.length > 0 &&
                    confirmed.selected.map((val) => (
                        <Chip
                            key={val}
                            label={val}
                            value={val}
                            isDeletable
                            customCSS={searchStyle.chipText}
                            onDelete={() =>
                                setConfirmed((prev) => ({ ...prev, selected: prev.selected.filter((v) => v !== val) }))
                            }
                        />
                    ))}
            </FlexBox>
        </FlexBox>
    );
};

export default Search;
