import { useState } from 'react';

import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  BoldIcon,
  EyeDropperIcon,
  ItalicIcon,
  UnderlineIcon,
} from '@heroicons/react/24/solid';

import { IconButton, ToggleButton, ToggleButtonGroup } from '@components/Button';
import Popover from '@components/Popover';
import usePopover from '@components/usePopover';

import { joinClassNames } from '@utils/format';

import { COLOR_LIST, DEFAULT_VALUE, TextAlignType } from './constants';

const Editor = () => {
  const [style, setStyle] = useState<string[]>([]);
  const [align, setAlign] = useState<TextAlignType>('text-left');
  const [color, setColor] = useState('text-black');

  const { anchorElement, handleClose, handleOpen, isOpen } = usePopover();

  return (
    <div className="w-full under-tablet:p-2.5">
      <div className="flex flex-wrap justify-end gap-2.5 rounded-t border border-b-0 border-black bg-white p-2.5">
        <ToggleButtonGroup
          value={style}
          onClick={(selected) => {
            if (style.includes(selected)) {
              setStyle((prev) => prev.filter((val) => val !== selected));
            } else {
              setStyle((prev) => [...prev, selected]);
            }
          }}
        >
          <ToggleButton aria-label="굵게" value="bold">
            <BoldIcon />
          </ToggleButton>
          <ToggleButton aria-label="기울기" value="italic">
            <ItalicIcon />
          </ToggleButton>
          <ToggleButton aria-label="밑줄" value="underline">
            <UnderlineIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <IconButton
          aria-expanded={isOpen}
          aria-label="색상 선택"
          id="color-button"
          variant="outlined"
          aria-controls={isOpen ? 'color-popover' : undefined}
          aria-haspopup="dialog"
          onClick={handleOpen}
        >
          <EyeDropperIcon />
        </IconButton>
        <Popover
          aria-labelledby="color-button"
          id="color-popover"
          isOpen={isOpen}
          anchorElement={anchorElement}
          anchorPosition={{ horizontal: 'right', vertical: 'bottom' }}
          onClose={handleClose}
        >
          <div className="flex max-w-30 flex-wrap items-center justify-center gap-2.5" role="group">
            {COLOR_LIST.map((val) => (
              <IconButton
                key={val}
                aria-label="텍스트 색상"
                aria-pressed={val === color}
                variant={val === color ? 'contained' : 'outlined'}
                onClick={() => setColor(val)}
              >
                <EyeDropperIcon className={val === color && val === 'text-black' ? 'text-white' : val} />
              </IconButton>
            ))}
          </div>
        </Popover>
        <ToggleButtonGroup
          value={align}
          onClick={(selected) => {
            if (selected === '') {
              setStyle([]);
              setAlign('text-left');
              setColor('text-black');
            } else {
              setAlign(() => selected as TextAlignType);
            }
          }}
        >
          <ToggleButton aria-label="텍스트 왼쪽 정렬" value="text-left">
            <Bars3BottomLeftIcon />
          </ToggleButton>
          <ToggleButton aria-label="텍스트 중앙 정렬" value="text-center">
            <Bars3Icon />
          </ToggleButton>
          <ToggleButton aria-label="텍스트 오른쪽 정렬" value="text-right">
            <Bars3BottomRightIcon />
          </ToggleButton>
          <ToggleButton value="">RESET</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="h-[calc(100vh-158px)] w-full border border-black tablet:h-125">
        <label htmlFor="editor">
          <span className="sr-only">에디터</span>
          <textarea
            readOnly
            defaultValue={DEFAULT_VALUE}
            id="editor"
            className={joinClassNames(
              'h-full w-full resize-none rounded-b border border-t-0 border-gray-100 bg-gray-100 p-5',
              color,
              align,
              style.includes('bold') ? 'font-semibold' : 'font-normal',
              style.includes('italic') && 'italic',
              style.includes('underline') && 'underline',
            )}
          />
        </label>
      </div>
    </div>
  );
};

export default Editor;
