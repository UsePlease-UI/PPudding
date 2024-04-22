import { Fragment, useState } from 'react';

import { FlexBox, Typography } from '@components/Base';
import { Checkbox, CheckboxGroup, Radio, RadioGroup, TextField } from '@components/Form';
import List from '@components/List';
import type { AlignType } from '@components/List';

import { ChevronDownFilled, ChevronUpFilled, HomeFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

export default function ListExample() {
    const { isTablet } = useMobile();

    const [type, setType] = useState('text');
    const [primaryText, setPrimaryText] = useState('Hello');
    const [secondaryText, setSecondaryText] = useState('This is listitem');
    const [position, setPosition] = useState('start');
    const [align, setAlign] = useState('top');
    const [isDense, setIsDense] = useState(true);
    const [hasIcon, setHasIcon] = useState(true);
    const [hasSecondaryText, setHasSecondaryText] = useState(true);
    const [open, setOpen] = useState<Record<string, boolean>>({
        schedule: true,
        mail: false,
        folder: false
    });

    const onClick = () => {
        console.log('clicked!');
    };

    return (
        <FlexBox
            width="w-full"
            flexDirection={isTablet ? 'flex-col-reverse' : 'flex-row'}
            gap="gap-20"
            padding="p-20"
            border="border"
            borderColor="border-primary-100"
            borderRadius="rounded"
        >
            <FlexBox width="w-full" flexDirection={isTablet ? 'flex-col-reverse' : 'flex-row'} gap="gap-20">
                <FlexBox
                    flex="flex-1"
                    flexDirection="flex-col"
                    gap={isTablet ? 'gap-5' : 'gap-10'}
                    justifyContent="justify-start"
                    border="border"
                    borderColor="border-primary-600"
                    padding="p-20"
                    borderRadius="rounded"
                >
                    <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                        Choose List{' '}
                        <Typography component="strong" color="text-primary-600">
                            Type
                        </Typography>
                    </Typography>
                    <RadioGroup isRow={false} value={type} onChange={(e) => setType(e.currentTarget.value)}>
                        {['text', 'button', 'action item', 'metadata', 'collapsed'].map((key) => (
                            <Radio key={key} name="type" size="medium" label={key} value={key} checked={key === type} />
                        ))}
                    </RadioGroup>
                    {(type === 'action item' || type === 'metadata') && (
                        <>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose List{' '}
                                <Typography component="strong" color="text-primary-600">
                                    Position
                                </Typography>
                            </Typography>
                            <RadioGroup
                                isRow={!isTablet}
                                value={position}
                                onChange={(e) => setPosition(e.currentTarget.value)}
                            >
                                {['start', 'end'].map((key) => (
                                    <Radio
                                        key={key}
                                        name="position"
                                        label={key}
                                        value={key}
                                        checked={key === position}
                                    />
                                ))}
                            </RadioGroup>
                        </>
                    )}
                    {type === 'button' && hasIcon && (
                        <>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose List Icon{' '}
                                <Typography component="strong" color="text-primary-600">
                                    Align
                                </Typography>
                            </Typography>
                            <RadioGroup
                                isRow={!isTablet}
                                value={align}
                                onChange={(e) => setAlign(e.currentTarget.value)}
                            >
                                {['top', 'bottom', ''].map((key) => (
                                    <Radio
                                        key={key}
                                        name="align"
                                        label={key || 'none'}
                                        value={key}
                                        checked={key === align}
                                    />
                                ))}
                            </RadioGroup>
                        </>
                    )}
                    {type !== 'collapsed' && (
                        <>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose List{' '}
                                <Typography component="strong" color="text-primary-600">
                                    Options
                                </Typography>
                            </Typography>
                            <CheckboxGroup isRow={!isTablet}>
                                <Checkbox
                                    name="list-icon"
                                    label="Icon"
                                    checked={hasIcon}
                                    disabled={type === 'collapsed'}
                                    onChange={() => setHasIcon((prev) => !prev)}
                                />
                                <Checkbox
                                    name="list-dense"
                                    label="Dense"
                                    checked={isDense}
                                    onChange={() => setIsDense((prev) => !prev)}
                                />
                                <Checkbox
                                    name="list-secondary-text"
                                    label="Secondary Text"
                                    checked={hasSecondaryText}
                                    onChange={() => setHasSecondaryText((prev) => !prev)}
                                />
                            </CheckboxGroup>
                            <TextField
                                labelText="Type Primary Text"
                                name="primaryText"
                                value={primaryText}
                                isFullWidth={isTablet}
                                maxLength={20}
                                onChange={(e) => setPrimaryText(e.currentTarget.value)}
                            />
                            <TextField
                                labelText="Type Secondary Text"
                                name="secondaryText"
                                value={secondaryText}
                                isFullWidth={isTablet}
                                maxLength={20}
                                onChange={(e) => setSecondaryText(e.currentTarget.value)}
                            />
                        </>
                    )}
                </FlexBox>
                <FlexBox flex="flex-1" width="w-full" alignItems="items-center" justifyContent="justify-center">
                    {type === 'collapsed' ? (
                        <List hasDivider>
                            {['Schedule', 'Mail', 'Folder'].map((val) => (
                                <Fragment key={val}>
                                    <List.ItemButton
                                        isDisabled={val === 'Schedule'}
                                        isDense
                                        onClick={() => setOpen((prev) => ({ ...prev, [val]: !prev[val] }))}
                                    >
                                        <List.ItemText
                                            primaryText={`${val} List Item`}
                                            secondaryText="Click here to see more"
                                        />
                                        <List.ItemIcon>
                                            {open[val] ? <ChevronUpFilled /> : <ChevronDownFilled />}
                                        </List.ItemIcon>
                                    </List.ItemButton>
                                    <List.Collapse isOpen={open[val]}>
                                        <List.CollapsedList isDense>
                                            <List.Item>
                                                <List.ItemText primaryText="Hello" />
                                            </List.Item>
                                            <List.Item>
                                                <List.ItemText primaryText="Good morning" />
                                            </List.Item>
                                        </List.CollapsedList>
                                    </List.Collapse>
                                </Fragment>
                            ))}
                        </List>
                    ) : (
                        <List hasDivider>
                            {Array.from({ length: 4 }).map((_, index) =>
                                type === 'button' ? (
                                    <List.ItemButton key={index} isDense={isDense} onClick={onClick}>
                                        {hasIcon && (
                                            <List.ItemIcon align={align as AlignType}>
                                                <HomeFilled className="h-5 w-5" />
                                            </List.ItemIcon>
                                        )}
                                        <List.ItemText
                                            primaryText={primaryText}
                                            secondaryText={hasSecondaryText ? secondaryText : ''}
                                        />
                                    </List.ItemButton>
                                ) : type === 'metadata' ? (
                                    <List.ItemButton key={index} isDense={isDense} onClick={onClick}>
                                        {type === 'metadata' && position === 'start' && (
                                            <List.Metadata position={position}>0{index + 1}</List.Metadata>
                                        )}
                                        <List.ItemText
                                            primaryText={primaryText}
                                            secondaryText={hasSecondaryText ? secondaryText : ''}
                                        />
                                        {type === 'metadata' && position === 'end' && (
                                            <List.Metadata>0{index + 1}</List.Metadata>
                                        )}
                                    </List.ItemButton>
                                ) : (
                                    <List.Item key={index} isDense={isDense}>
                                        {type === 'text' ? (
                                            <List.ItemText
                                                primaryText={primaryText}
                                                secondaryText={hasSecondaryText ? secondaryText : ''}
                                            />
                                        ) : (
                                            <>
                                                {type === 'action item' && position === 'start' && (
                                                    <List.ActionItem isDense={isDense}>
                                                        <Radio
                                                            name="action-item"
                                                            label={
                                                                <List.ItemText
                                                                    primaryText={primaryText}
                                                                    secondaryText={
                                                                        hasSecondaryText ? secondaryText : ''
                                                                    }
                                                                />
                                                            }
                                                        />
                                                    </List.ActionItem>
                                                )}
                                                {type === 'action item' && position === 'end' && (
                                                    <List.ActionItem isDense={isDense}>
                                                        <Checkbox
                                                            position="start"
                                                            name={primaryText}
                                                            label={
                                                                <List.ItemText
                                                                    primaryText={primaryText}
                                                                    secondaryText={
                                                                        hasSecondaryText ? secondaryText : ''
                                                                    }
                                                                />
                                                            }
                                                        />
                                                    </List.ActionItem>
                                                )}
                                            </>
                                        )}
                                    </List.Item>
                                )
                            )}
                        </List>
                    )}
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}
