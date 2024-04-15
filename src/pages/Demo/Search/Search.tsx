import { useState } from 'react';

import { FlexBox, Typography } from '@components/Base';
import { Button, Chip } from '@components/Button';
import { Radio, RadioGroup, Checkbox, CheckboxGroup, TextField } from '@components/Form';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';

import { ChevronDownFilled, ChevronUpFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

const Search = () => {
    const { isTablet } = useMobile();
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

    const [state, setState] = useState('Y');
    const [selected, setSelected] = useState<string[]>([]);
    const [confirmed, setConfirmed] = useState<{ state: typeof state; selected: typeof selected }>({
        state: '',
        selected: []
    });

    return (
        <FlexBox flexDirection="flex-col">
            <FlexBox
                width="w-full"
                padding="px-20"
                gap="gap-10"
                flexDirection={isTablet ? 'flex-col' : 'flex-row'}
                justifyContent="center"
                alignItems={isTablet ? 'flex-start' : 'center'}
            >
                <div className="shrink-0 rounded border border-primary-600 px-8">
                    <Typography fontSize="text-24" fontWeight="font-black" color="text-primary-600">
                        RC
                    </Typography>
                </div>
                <TextField type="search" aria-label="검색" placeholder="검색어를 입력해 주세요" />
            </FlexBox>
            <FlexBox justifyContent="justify-end" flex="flex-1" width="w-full" padding="px-20">
                <Button
                    size="small"
                    hasEndIcon
                    icon={
                        isOpen ? <ChevronUpFilled className="h-12 w-12" /> : <ChevronDownFilled className="h-12 w-12" />
                    }
                    onClick={handleOpen}
                >
                    더보기
                </Button>
            </FlexBox>
            <Popover
                isOpen={isOpen}
                anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
                anchorElement={anchorElement}
                onClose={handleClose}
            >
                <FlexBox flexDirection="flex-col" width="w-200" padding="p-10" borderRadius="rounded-lg">
                    <Typography component="p" fontWeight="600" margin="mb-10">
                        브랜드
                    </Typography>
                    <CheckboxGroup isRow={false} gap="gap-10">
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
                    <Typography component="p" fontWeight="600" margin="mt-20 mb-10">
                        판매여부
                    </Typography>
                    <FlexBox margin="mb-20">
                        <RadioGroup gap="gap-20" value={state} onChange={(e) => setState(e.currentTarget.value)}>
                            <Radio name="state" label="판매 중" value="Y" />
                            <Radio name="state" label="품절" value="N" />
                        </RadioGroup>
                    </FlexBox>
                    <div className="ml-auto w-max">
                        <Button
                            variant="outlined"
                            size="medium"
                            onClick={() => {
                                handleClose();
                                setConfirmed({ state, selected });
                            }}
                        >
                            적용
                        </Button>
                    </div>
                </FlexBox>
            </Popover>
            <FlexBox gap="gap-10" flexWrap="flex-wrap" margin="my-20" padding="px-20">
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
                            label={val.toUpperCase()}
                            value={val}
                            isDeletable
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
