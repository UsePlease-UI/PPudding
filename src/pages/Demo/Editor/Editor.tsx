/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { css } from '@emotion/react';
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
import { palette } from 'styles';

import { Box, FlexBox } from 'components/Base';
import IconButton from 'components/Button/IconButton';
import { ToggleButton, ToggleButtonGroup } from 'components/Button/ToggleButton';
import Popover from 'components/Shared/Popover';
import usePopOver from 'components/Shared/usePopover/usePopover';

import { COLOR_LIST, DEFAULT_VALUE } from './constants';
import { editorStyle } from './styles';

type TextAlignType = 'center' | 'right' | 'left' | 'justify';

const Editor = () => {
    const [style, setStyle] = useState<string[]>([]);
    const [align, setAlign] = useState<TextAlignType>();
    const [color, setColor] = useState(palette.primary[600]);

    const { isOpen, anchorElement, handleOpen, handleClose } = usePopOver();

    return (
        <Box customCSS={editorStyle.container}>
            <FlexBox gap={10} justifyContent="flex-end" flexWrap="wrap" customCSS={editorStyle.toolbarContainer}>
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
                <FlexBox gap={5}>
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
                            alignItems="center"
                            justifyContent="center"
                            gap={10}
                            flexWrap="wrap"
                            css={editorStyle.colorContainer}
                        >
                            {COLOR_LIST.map((val) => (
                                <IconButton key={val} variant="outlined" onClick={() => setColor(val)}>
                                    <ColorFilled css={{ color: val }} />
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
                    <ToggleButton name="textAlign" value="left">
                        <TextAlignLeftRegular />
                    </ToggleButton>
                    <ToggleButton name="textAlign" value="center">
                        <TextAlignCenterRegular />
                    </ToggleButton>
                    <ToggleButton name="textAlign" value="right">
                        <TextAlignRightRegular />
                    </ToggleButton>
                    <ToggleButton name="textAlign" value="justify">
                        <TextAlignJustifyRegular />
                    </ToggleButton>
                    <ToggleButton name="textAlign" value="">
                        RESET
                    </ToggleButton>
                </ToggleButtonGroup>
            </FlexBox>
            <textarea
                css={css([
                    {
                        color,
                        textAlign: align,
                        fontWeight: style.includes('bold') ? 600 : 400,
                        fontStyle: style.includes('italic') ? 'italic' : '',
                        textDecoration: style.includes('underline') ? 'underline' : ''
                    },
                    editorStyle.textarea
                ])}
                readOnly
                defaultValue={DEFAULT_VALUE}
            />
        </Box>
    );
};

export default Editor;
