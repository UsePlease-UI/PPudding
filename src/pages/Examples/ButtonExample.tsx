import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
    Button,
    Chip,
    IconButton,
    ToggleButton,
    ToggleButtonGroup,
    ShapeType,
    SizeType,
    VariantType
} from '@components/Button';
import { TextField } from '@components/Form';
import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';

import { AddFilled, CheckmarkFilled, DeleteFilled } from '@fluentui/react-icons';

import { CheckboxControl, RadioControls } from './components/Controls';
import Heading from './components/Heading';
import { customStyles } from './components/styles';

const SIZE = ['small', 'medium', 'large'];
const VARIANT = ['outlined', 'contained', 'text'];
const SHAPE = ['square', 'rounded', 'circular'];
const ICON = ['startIcon', 'endIcon'];

const EXAMPLE_LIST = ['Button', 'Chip', 'Icon Button', 'Toggle Button'];

export default function ButtonExample() {
    const [searchParams] = useSearchParams();
    const component = searchParams.get('component');

    const [tab, setTab] = useState(EXAMPLE_LIST.findIndex((val) => val === component) + 1 || 1);

    const [sizeType, setSizeType] = useState(SIZE[0]);
    const [shapeType, setShapeType] = useState(SHAPE[0]);
    const [variantType, setVariantType] = useState(VARIANT[0]);
    const [icon, setIcon] = useState('startIcon');
    const [isTrue, setIsTrue] = useState(false);
    const [buttonText, setButtonText] = useState('버튼');

    const [fruits, setFruits] = useState('banana');

    const handleReset = () => {
        setSizeType(SIZE[0]);
        setShapeType(SHAPE[0]);
        setVariantType(VARIANT[0]);
        setIcon('startIcon');
        setIsTrue(false);
        setButtonText('버튼');
    };

    return (
        <div className="flex flex-col gap-10">
            <Heading title="Button Playground" />
            <TabContainer>
                <Tab
                    aria-label="button example tab"
                    value={tab}
                    onChange={(newValue) => {
                        setTab(newValue);
                        handleReset();
                    }}
                >
                    <TabItem label="BUTTON" value={tab} index={1} />
                    <TabItem label="CHIP" value={tab} index={2} />
                    <TabItem label="ICON" value={tab} index={3} />
                    <TabItem label="TOGGLE" value={tab} index={4} />
                </Tab>
                <TabPanel index={1} value={tab}>
                    <div className={customStyles.playgroundContainer}>
                        <div className={customStyles.playgroundControlContainer}>
                            <TextField
                                labelText="Type Button Text"
                                helperText="최대 20자까지 입력할 수 있습니다."
                                name="buttonText"
                                isFullWidth
                                value={buttonText}
                                maxLength={20}
                                onChange={(e) => setButtonText(e.currentTarget.value)}
                            />
                            <RadioControls
                                name="button variant"
                                value={variantType}
                                onChange={setVariantType}
                                options={VARIANT}
                            />
                            <RadioControls name="button size" value={sizeType} onChange={setSizeType} options={SIZE} />
                            <RadioControls
                                name="button shape"
                                value={shapeType}
                                onChange={setShapeType}
                                options={SHAPE}
                            />
                            <RadioControls name="button icon" value={icon} onChange={setIcon} options={ICON} />
                            <CheckboxControl label="Full Width" name="Width" checked={isTrue} onChange={setIsTrue} />
                        </div>
                        <div className={customStyles.playgroundDisplayContainer}>
                            <Button
                                isFullWidth={isTrue}
                                size={sizeType as SizeType}
                                shape={shapeType as ShapeType}
                                variant={variantType as VariantType}
                                startIcon={icon === 'startIcon' && <DeleteFilled />}
                                endIcon={icon === 'endIcon' && <AddFilled />}
                            >
                                {buttonText || '값을 입력해 주세요'}
                            </Button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    <div className={customStyles.playgroundContainer}>
                        <div className={customStyles.playgroundControlContainer}>
                            <TextField
                                labelText="Type Button Text"
                                helperText="최대 20자까지 입력할 수 있습니다."
                                name="buttonText"
                                isFullWidth
                                value={buttonText}
                                maxLength={20}
                                onChange={(e) => setButtonText(e.currentTarget.value)}
                            />
                            <RadioControls
                                options={VARIANT}
                                name="chip variant"
                                value={variantType}
                                onChange={setVariantType}
                            />
                            <CheckboxControl label="Deletable" name="Deletable" checked={isTrue} onChange={setIsTrue} />
                        </div>
                        <div className={customStyles.playgroundDisplayContainer}>
                            <Chip
                                variant={variantType as VariantType}
                                label={buttonText || '값을 입력해주세요'}
                                value={buttonText}
                                isDeletable={isTrue}
                            />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel index={3} value={tab}>
                    <div className={customStyles.playgroundContainer}>
                        <div className={customStyles.playgroundControlContainer}>
                            <RadioControls
                                options={VARIANT}
                                name="icon button variant"
                                value={variantType}
                                onChange={setVariantType}
                            />
                            <RadioControls
                                name="icon button size"
                                value={sizeType}
                                onChange={setSizeType}
                                options={SIZE}
                            />
                            <RadioControls
                                name="icon button shape"
                                value={shapeType}
                                onChange={setShapeType}
                                options={SHAPE}
                            />
                        </div>
                        <div className={customStyles.playgroundDisplayContainer}>
                            <IconButton
                                size={sizeType as SizeType}
                                shape={shapeType as ShapeType}
                                variant={variantType as VariantType}
                            >
                                <CheckmarkFilled />
                            </IconButton>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel index={4} value={tab}>
                    <div className={customStyles.playgroundContainer}>
                        <div className={customStyles.playgroundControlContainer}>
                            <RadioControls
                                name="toggle button size"
                                value={sizeType}
                                onChange={setSizeType}
                                options={SIZE}
                            />
                        </div>
                        <div className={customStyles.playgroundDisplayContainer}>
                            <ToggleButtonGroup value={fruits} onChange={(e) => setFruits(e.currentTarget.value)}>
                                <ToggleButton
                                    size={sizeType as SizeType}
                                    name="fruits"
                                    value="apple"
                                    onChange={(e) => setFruits(e.currentTarget.value)}
                                >
                                    Apple
                                </ToggleButton>
                                <ToggleButton
                                    size={sizeType as SizeType}
                                    name="fruits"
                                    value="banana"
                                    onChange={(e) => setFruits(e.currentTarget.value)}
                                >
                                    Banana
                                </ToggleButton>
                                <ToggleButton
                                    size={sizeType as SizeType}
                                    name="fruits"
                                    value="orange"
                                    onChange={(e) => setFruits(e.currentTarget.value)}
                                >
                                    Orange
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                </TabPanel>
            </TabContainer>
        </div>
    );
}
