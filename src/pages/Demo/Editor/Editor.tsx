import { useState } from 'react';

import { FlexBox } from '@components/Base';
import { IconButton, ToggleButton, ToggleButtonGroup } from '@components/Button';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';

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
import { joinClassNames } from '@utils/format';

import { COLOR_LIST, DEFAULT_VALUE } from './constants';

type TextAlignType = 'center' | 'right' | 'left' | 'justify';

const Editor = () => {
    const [style, setStyle] = useState<string[]>([]);
    const [align, setAlign] = useState<TextAlignType>();
    const [color, setColor] = useState('text-primary-600');

    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

    return (
        <div className="under-tablet:p-10">
            <FlexBox
                gap="gap-10"
                justifyContent="justify-end"
                flexWrap="flex-wrap"
                borderRadius="rounded-t"
                padding="p-10"
                backgroundColor="bg-blue-gray-100"
            >
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
                <FlexBox gap="gap-5">
                    <IconButton variant="outlined" onClick={handleOpen}>
                        <TextColorFilled />
                    </IconButton>
                    <Popover
                        isOpen={isOpen}
                        anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
                        anchorElement={anchorElement}
                        onClose={handleClose}
                    >
                        <FlexBox
                            alignItems="items-center"
                            justifyContent="justify-center"
                            gap="gap-10"
                            flexWrap="flex-wrap"
                            maxWidth="max-w-120"
                        >
                            {COLOR_LIST.map((val) => (
                                <IconButton key={val} variant="outlined" onClick={() => setColor(val)}>
                                    <ColorFilled className={val} />
                                </IconButton>
                            ))}
                        </FlexBox>
                    </Popover>
                </FlexBox>
                <ToggleButtonGroup
                    value={align}
                    onChange={(e) => {
                        const newValue = e.currentTarget.value;
                        setAlign((prev) => (prev === newValue ? '' : newValue) as TextAlignType);
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
            </FlexBox>
            <div className="h-[calc(100vh-158px)] w-full tablet:h-500">
                <textarea
                    className={joinClassNames(
                        'h-full w-full resize-none rounded-b border border-t-0 border-blue-gray-100 p-20 outline-none',
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
