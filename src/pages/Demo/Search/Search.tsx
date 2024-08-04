import { useState } from 'react';

import { Button, Chip } from '@components/Button';
import { Radio, RadioGroup, Checkbox, CheckboxGroup, TextField } from '@components/Form';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';

import { ChevronDownFilled, ChevronUpFilled } from '@fluentui/react-icons';

const Search = () => {
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

    const [state, setState] = useState('Y');
    const [selected, setSelected] = useState<string[]>([]);
    const [confirmed, setConfirmed] = useState<{ state: typeof state; selected: typeof selected }>({
        state: '',
        selected: []
    });

    return (
        <div className="flex flex-col">
            <div className="flex-start mb-20 mt-20 flex w-full flex-col justify-center gap-10 px-20 tablet:mt-0 tablet:flex-row tablet:items-center">
                <div className="shrink-0 rounded border border-primary-600 px-8 under-tablet:w-max">
                    <p className="text-24 font-black text-primary-800">RC</p>
                </div>
                <TextField isFullWidth type="search" aria-label="검색" placeholder="검색어를 입력해 주세요" />
            </div>
            <div className="flex w-full flex-1 items-center justify-end px-20">
                <Button
                    size="small"
                    endIcon={
                        isOpen ? <ChevronUpFilled className="h-12 w-12" /> : <ChevronDownFilled className="h-12 w-12" />
                    }
                    onClick={handleOpen}
                >
                    더보기
                </Button>
            </div>
            <Popover
                isOpen={isOpen}
                anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
                anchorElement={anchorElement}
                onClose={handleClose}
            >
                <div className="flex w-200 flex-col rounded-lg p-10">
                    <p className="mb-10 font-semibold">브랜드</p>
                    <CheckboxGroup isRow={false} gap={10}>
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
                    <p className="mb-10 mt-20 font-semibold">판매여부</p>
                    <div className="mb-20">
                        <RadioGroup gap={20} value={state} onChange={(e) => setState(e.currentTarget.value)}>
                            <Radio name="state" label="판매 중" value="Y" />
                            <Radio name="state" label="품절" value="N" />
                        </RadioGroup>
                    </div>
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
                </div>
            </Popover>
            <div className="my-20 flex flex-wrap gap-10 px-20">
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
            </div>
        </div>
    );
};

export default Search;
