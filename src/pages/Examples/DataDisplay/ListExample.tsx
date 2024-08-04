import { Fragment, useState } from 'react';

import { Checkbox, CheckboxGroup, Radio, RadioGroup, TextField } from '@components/Form';
import List from '@components/List';
import type { AlignType } from '@components/List';

import { ChevronDownFilled, ChevronUpFilled, HomeFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

import { customStyles } from '../components/styles';

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
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <strong className="text-14 tablet:text-16">
                    Choose List <span className="text-primary-800">Type</span>
                </strong>
                <RadioGroup isRow={false} value={type} onChange={(e) => setType(e.currentTarget.value)}>
                    {['text', 'button', 'action item', 'metadata', 'collapsed'].map((key) => (
                        <Radio key={key} name="type" size="medium" label={key} value={key} checked={key === type} />
                    ))}
                </RadioGroup>
                {(type === 'action item' || type === 'metadata') && (
                    <>
                        <strong className="text-14 tablet:text-16">
                            Choose List <span className="text-primary-800">Position</span>
                        </strong>
                        <RadioGroup
                            isRow={!isTablet}
                            value={position}
                            onChange={(e) => setPosition(e.currentTarget.value)}
                        >
                            {['start', 'end'].map((key) => (
                                <Radio key={key} name="position" label={key} value={key} checked={key === position} />
                            ))}
                        </RadioGroup>
                    </>
                )}
                {type === 'button' && hasIcon && (
                    <>
                        <strong className="text-14 tablet:text-16">
                            Choose List Icon <span className="text-primary-800">Align</span>
                        </strong>
                        <RadioGroup isRow={!isTablet} value={align} onChange={(e) => setAlign(e.currentTarget.value)}>
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
                        <strong className="text-14 tablet:text-16">
                            Choose List <span className="text-primary-800">Options</span>
                        </strong>
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
            </div>
            <div className="flex w-full flex-1 items-center justify-center">
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
                                                                secondaryText={hasSecondaryText ? secondaryText : ''}
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
                                                                secondaryText={hasSecondaryText ? secondaryText : ''}
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
            </div>
        </div>
    );
}
