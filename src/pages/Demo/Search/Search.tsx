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
  const { anchorElement, handleClose, handleOpen, isOpen } = usePopover();

  const [state, setState] = useState('Y');
  const [selected, setSelected] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState<{ selected: typeof selected; state: typeof state }>({
    state: '',
    selected: [],
  });

  return (
    <div className="flex flex-col">
      <div className="my-5 flex w-full flex-col items-start justify-center gap-2.5 px-5 tablet:mt-0 tablet:flex-row tablet:items-center">
        <div className="shrink-0 rounded border border-primary-600 px-2 under-tablet:w-max">
          <p className="text-24 font-black text-primary-800">RC</p>
        </div>
        <TextField isFullWidth aria-label="검색" placeholder="검색어를 입력해 주세요" type="search" />
      </div>
      <div className="flex w-full flex-1 items-center justify-end px-5">
        <Button
          endIcon={isOpen ? <ChevronUpFilled className="size-3" /> : <ChevronDownFilled className="size-3" />}
          size="small"
          onClick={handleOpen}
        >
          더보기
        </Button>
      </div>
      <Popover
        anchorElement={anchorElement}
        anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className="flex w-50 flex-col rounded-lg p-2.5">
          <p className="mb-2.5 font-semibold">브랜드</p>
          <CheckboxGroup gap={2.5} isRow={false}>
            <Checkbox
              checked={selected.includes('channel')}
              label="Channel"
              value="channel"
              onChange={() => {
                if (selected.includes('channel')) {
                  setSelected((prev) => prev.filter((val) => val !== 'channel'));
                } else {
                  setSelected((prev) => [...prev, 'channel']);
                }
              }}
            />
            <Checkbox
              checked={selected.includes('gucci')}
              label="Gucci"
              value="gucci"
              onChange={() => {
                if (selected.includes('gucci')) {
                  setSelected((prev) => prev.filter((val) => val !== 'gucci'));
                } else {
                  setSelected((prev) => [...prev, 'gucci']);
                }
              }}
            />
            <Checkbox
              checked={selected.includes('prada')}
              label="Prada"
              value="prada"
              onChange={() => {
                if (selected.includes('prada')) {
                  setSelected((prev) => prev.filter((val) => val !== 'prada'));
                } else {
                  setSelected((prev) => [...prev, 'prada']);
                }
              }}
            />
            <Checkbox
              checked={selected.includes('ysl')}
              label="YSL"
              value="ysl"
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
              <Radio label="판매 중" name="state" value="Y" />
              <Radio label="품절" name="state" value="N" />
            </RadioGroup>
          </div>
          <div className="ml-auto w-max">
            <Button
              size="medium"
              variant="outlined"
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
            isDeletable
            label={confirmed.state === 'Y' ? '판매 중' : '품절'}
            value={confirmed.state}
            onDelete={() => setConfirmed((prev) => ({ ...prev, state: '' }))}
          />
        )}
        {confirmed.selected.length > 0 &&
          confirmed.selected.map((val) => (
            <Chip
              key={val}
              isDeletable
              label={val.toUpperCase()}
              value={val}
              onDelete={() => setConfirmed((prev) => ({ ...prev, selected: prev.selected.filter((v) => v !== val) }))}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
