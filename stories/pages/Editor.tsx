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
import { SharedPopover, useSharedPopover } from '@components/Shared';

import { joinClassNames } from '@utils/format';

import { COLOR_LIST, DEFAULT_VALUE, TextAlignType } from './constants';

const Editor = () => {
  const [style, setStyle] = useState<string[]>([]);
  const [align, setAlign] = useState<TextAlignType>('text-left');
  const [color, setColor] = useState('text-primary-800');

  const { anchorElement, handleClose, handleOpen, isOpen } = useSharedPopover();

  return (
    <div className="under-tablet:p-2.5">
      <div className="flex flex-wrap justify-end gap-2.5 rounded-t bg-yellow-gray-50 p-2.5">
        <ToggleButtonGroup
          value={style}
          onChange={(e) => {
            const newValue = e.currentTarget.value;
            if (style.includes(newValue)) {
              setStyle((prev) => prev.filter((val) => val !== newValue));
            } else {
              setStyle((prev) => [...prev, newValue]);
            }
          }}
        >
          <ToggleButton name="style" value="bold">
            <BoldIcon />
          </ToggleButton>
          <ToggleButton name="style" value="italic">
            <ItalicIcon />
          </ToggleButton>
          <ToggleButton name="style" value="underline">
            <UnderlineIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <IconButton variant="outlined" onClick={handleOpen}>
          <EyeDropperIcon />
        </IconButton>
        <SharedPopover
          isOpen={isOpen}
          anchorElement={anchorElement}
          anchorPosition={{ horizontal: 'right', vertical: 'bottom' }}
          onClose={handleClose}
        >
          <div className="flex max-w-30 flex-wrap items-center justify-center gap-2.5">
            {COLOR_LIST.map((val) => (
              <IconButton key={val} variant="outlined" onClick={() => setColor(val)}>
                <EyeDropperIcon className={val} />
              </IconButton>
            ))}
          </div>
        </SharedPopover>
        <ToggleButtonGroup
          value={align}
          onChange={(e) => {
            const newValue = e.currentTarget.value;
            if (newValue === '') {
              setStyle([]);
              setAlign('text-left');
              setColor('text-primary-800');
            } else {
              setAlign((prev) => (prev === newValue ? '' : newValue) as TextAlignType);
            }
          }}
        >
          <ToggleButton name="textAlign" value="text-left">
            <Bars3BottomLeftIcon />
          </ToggleButton>
          <ToggleButton name="textAlign" value="text-center">
            <Bars3Icon />
          </ToggleButton>
          <ToggleButton name="textAlign" value="text-right">
            <Bars3BottomRightIcon />
          </ToggleButton>
          <ToggleButton name="textAlign" value="">
            RESET
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="h-[calc(100vh-158px)] w-full tablet:h-125">
        <textarea
          readOnly
          defaultValue={DEFAULT_VALUE}
          className={joinClassNames(
            'h-full w-full resize-none rounded-b border border-t-0 border-yellow-gray-100 p-5 outline-none',
            color,
            align,
            style.includes('bold') ? 'font-semibold' : 'font-normal',
            style.includes('italic') && 'italic',
            style.includes('underline') && 'underline',
          )}
        />
      </div>
    </div>
  );
};

export default Editor;
