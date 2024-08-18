import { useState } from 'react';

import { ChevronDownFilled, ChevronUpFilled } from '@fluentui/react-icons';

import Button from '@components/Button/Button';
import Chip from '@components/Button/Chip';
import { Checkbox, CheckboxGroup } from '@components/Form/Checkbox';
import { Radio, RadioGroup } from '@components/Form/Radio';
import TextField from '@components/Form/TextField';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';

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
            <div className="flex-start my-5 flex w-full flex-col justify-center gap-2.5 px-5 tablet:mt-0 tablet:flex-row tablet:items-center">
                <div className="shrink-0 rounded border border-primary-600 px-2 under-tablet:w-max">
                    <p className="text-24 font-black text-primary-800">RC</p>
                </div>
                <TextField isFullWidth type="search" aria-label="검색" placeholder="검색어를 입력해 주세요" />
            </div>
            <div className="flex w-full flex-1 items-center justify-end px-5">
                <Button
                    size="small"
                    endIcon={
                        isOpen ? <ChevronUpFilled className="h-3 w-3" /> : <ChevronDownFilled className="h-3 w-3" />
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
                <div className="flex w-50 flex-col rounded-lg p-2.5">
                    <p className="mb-2.5 font-semibold">브랜드</p>
                    <CheckboxGroup isRow={false} gap={2.5}>
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
                    <p className="mb-2.5 mt-5 font-semibold">판매여부</p>
                    <div className="mb-5">
                        <RadioGroup gap={5} value={state} onChange={(e) => setState(e.currentTarget.value)}>
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
            <div className="my-5 flex flex-wrap gap-2.5 px-5">
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
