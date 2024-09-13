import { Fragment, useState } from 'react';

import { ChevronDownFilled, ChevronUpFilled, HomeFilled } from '@fluentui/react-icons';

import { Checkbox, CheckboxGroup } from '@components/Form/Checkbox';
import { Radio } from '@components/Form/Radio';
import TextField from '@components/Form/TextField';
import List from '@components/List';
import { AlignType } from '@components/List';

import useMobile from '@hooks/useMobile';

import { LIST_ALIGN, LIST_POSITION, LIST_TYPE } from './constants';
import { customStyles, RadioControls } from '../Common';

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
        folder: false,
    });

    const onClick = () => {
        console.log('clicked!');
    };

    return (
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <RadioControls name="list type" options={LIST_TYPE} value={type} onChange={setType} />
                {(type === 'action item' || type === 'metadata') && (
                    <RadioControls
                        name="list position"
                        options={LIST_POSITION}
                        value={position}
                        onChange={setPosition}
                    />
                )}
                {type === 'button' && hasIcon && (
                    <RadioControls name="list icon align" options={LIST_ALIGN} value={align} onChange={setAlign} />
                )}
                {type !== 'collapsed' && (
                    <>
                        <div>
                            <strong className="text-14 tablet:text-16">
                                Choose List <span className="text-primary-800">Options</span>
                            </strong>
                            <CheckboxGroup isRow={!isTablet}>
                                <Checkbox
                                    checked={hasIcon}
                                    label="Icon"
                                    name="list-icon"
                                    onChange={() => setHasIcon((prev) => !prev)}
                                />
                                <Checkbox
                                    checked={isDense}
                                    label="Dense"
                                    name="list-dense"
                                    onChange={() => setIsDense((prev) => !prev)}
                                />
                                <Checkbox
                                    checked={hasSecondaryText}
                                    label="Secondary Text"
                                    name="list-secondary-text"
                                    onChange={() => setHasSecondaryText((prev) => !prev)}
                                />
                            </CheckboxGroup>
                        </div>
                        <TextField
                            isFullWidth={isTablet}
                            labelText="Primary Text"
                            maxLength={20}
                            name="primaryText"
                            value={primaryText}
                            onChange={(e) => setPrimaryText(e.currentTarget.value)}
                        />
                        <TextField
                            isFullWidth={isTablet}
                            labelText="Secondary Text"
                            maxLength={20}
                            name="secondaryText"
                            value={secondaryText}
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
                                    isDense
                                    isDisabled={val === 'Schedule'}
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
                                            <HomeFilled className="size-5" />
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
                                                        name={primaryText}
                                                        position="start"
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
                            ),
                        )}
                    </List>
                )}
            </div>
        </div>
    );
}
