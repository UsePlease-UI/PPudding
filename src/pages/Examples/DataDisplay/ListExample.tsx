import { Fragment, useState } from 'react';

import { ChevronDownFilled, ChevronUpFilled, HomeFilled } from '@fluentui/react-icons';

import { Checkbox, CheckboxGroup, Radio, TextField } from '@components/Form';
import List from '@components/List';
import { AlignType } from '@components/List';

import useMobile from '@hooks/useMobile';

import { LIST_ALIGN, LIST_POSITION, LIST_TYPE } from './constants';
import { RadioControls, customStyles } from '../Common';

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
                <RadioControls name="list type" value={type} onChange={setType} options={LIST_TYPE} />
                {(type === 'action item' || type === 'metadata') && (
                    <RadioControls
                        name="list position"
                        value={position}
                        onChange={setPosition}
                        options={LIST_POSITION}
                    />
                )}
                {type === 'button' && hasIcon && (
                    <RadioControls name="list icon align" value={align} onChange={setAlign} options={LIST_ALIGN} />
                )}
                {type !== 'collapsed' && (
                    <>
                        <div>
                            <strong className="text-14 tablet:text-16">
                                Choose List <span className="text-primary-800">Options</span>
                            </strong>
                            <CheckboxGroup isRow={!isTablet}>
                                <Checkbox
                                    name="list-icon"
                                    label="Icon"
                                    checked={hasIcon}
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
                        </div>
                        <TextField
                            labelText="Primary Text"
                            name="primaryText"
                            value={primaryText}
                            isFullWidth={isTablet}
                            maxLength={20}
                            onChange={(e) => setPrimaryText(e.currentTarget.value)}
                        />
                        <TextField
                            labelText="Secondary Text"
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
