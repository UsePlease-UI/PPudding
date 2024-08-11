import { useState } from 'react';

import {
    ColorFilled,
    TextAlignCenterRegular,
    TextAlignJustifyRegular,
    TextAlignLeftRegular,
    TextAlignRightRegular,
    TextBoldRegular,
    TextColorFilled,
    TextItalicRegular,
    TextUnderlineRegular
} from '@fluentui/react-icons';

import { IconButton, ToggleButton, ToggleButtonGroup } from '@components/Button';
import { Popover, usePopover } from '@components/Shared';

import { joinClassNames } from '@utils/format';

import { COLOR_LIST, DEFAULT_VALUE, TextAlignType } from './constants';

const Editor = () => {
    const [style, setStyle] = useState<string[]>([]);
    const [align, setAlign] = useState<TextAlignType>('text-left');
    const [color, setColor] = useState('text-primary-800');

    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

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
                        <TextBoldRegular />
                    </ToggleButton>
                    <ToggleButton name="style" value="italic">
                        <TextItalicRegular />
                    </ToggleButton>
                    <ToggleButton name="style" value="underline">
                        <TextUnderlineRegular />
                    </ToggleButton>
                </ToggleButtonGroup>
                <IconButton variant="outlined" onClick={handleOpen}>
                    <TextColorFilled />
                </IconButton>
                <Popover
                    isOpen={isOpen}
                    anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
                    anchorElement={anchorElement}
                    onClose={handleClose}
                >
                    <div className="flex max-w-30 flex-wrap items-center justify-center gap-2.5">
                        {COLOR_LIST.map((val) => (
                            <IconButton key={val} variant="outlined" onClick={() => setColor(val)}>
                                <ColorFilled className={val} />
                            </IconButton>
                        ))}
                    </div>
                </Popover>
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
                        <TextAlignLeftRegular />
                    </ToggleButton>
                    <ToggleButton name="textAlign" value="text-center">
                        <TextAlignCenterRegular />
                    </ToggleButton>
                    <ToggleButton name="textAlign" value="text-right">
                        <TextAlignRightRegular />
                    </ToggleButton>
                    <ToggleButton name="textAlign" value="text-justify">
                        <TextAlignJustifyRegular />
                    </ToggleButton>
                    <ToggleButton name="textAlign" value="">
                        RESET
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="tablet:h-500 h-[calc(100vh-158px)] w-full">
                <textarea
                    className={joinClassNames(
                        'h-full w-full resize-none rounded-b border border-t-0 border-yellow-gray-100 p-5 outline-none',
                        color,
                        align,
                        style.includes('bold') ? 'font-semibold' : 'font-normal',
                        style.includes('italic') && 'italic',
                        style.includes('underline') && 'underline'
                    )}
                    readOnly
                    defaultValue={DEFAULT_VALUE}
                />
            </div>
        </div>
    );
};

export default Editor;
