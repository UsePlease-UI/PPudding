import { useState } from 'react';

import { FlexBox, Typography } from '@components/Base';
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
import { Checkbox, Radio, RadioGroup, TextField } from '@components/Form';
import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';

import { AddFilled, CheckmarkFilled, DeleteFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

import Heading from '../Common/Heading';

const SIZE = ['small', 'medium', 'large'];
const VARIANT = ['outlined', 'contained', 'text'];
const SHAPE = ['square', 'rounded', 'circular'];

export default function ButtonExample() {
    const { isTablet } = useMobile();

    const [tab, setTab] = useState(1);

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
        <FlexBox flexDirection="flex-col" gap="gap-10">
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
                    <TabItem label="CHIP" value={tab} index={4} />
                    <TabItem label="ICON" value={tab} index={2} />
                    <TabItem label="TOGGLE" value={tab} index={3} />
                </Tab>
                <TabPanel index={1} value={tab}>
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
                            <TextField
                                labelText="Type Button Text"
                                helperText="최대 20자까지 입력할 수 있습니다."
                                name="buttonText"
                                isFullWidth
                                value={buttonText}
                                maxLength={20}
                                onChange={(e) => setButtonText(e.currentTarget.value)}
                            />
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose Button <span className="text-primary-600">Variant</span>
                            </Typography>
                            <RadioGroup
                                value={variantType}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setVariantType(e.currentTarget.value)}
                            >
                                {VARIANT.map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="buttonVariant"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose Button <span className="text-primary-600">Size</span>
                            </Typography>
                            <RadioGroup
                                value={sizeType}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setSizeType(e.currentTarget.value)}
                            >
                                {SIZE.map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="buttonSize"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose Button <span className="text-primary-600">Shape</span>
                            </Typography>
                            <RadioGroup
                                value={shapeType}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setShapeType(e.currentTarget.value)}
                            >
                                {SHAPE.map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="buttonShape"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose Button <span className="text-primary-600">Icon</span>
                            </Typography>
                            <RadioGroup
                                value={icon}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setIcon(e.currentTarget.value)}
                            >
                                {['startIcon', 'endIcon'].map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="buttonIcon"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose Button <span className="text-primary-600">Width</span>
                            </Typography>
                            <Checkbox
                                label="Full Width"
                                checked={isTrue}
                                size={isTablet ? 'small' : 'medium'}
                                onChange={(e) => setIsTrue(e.currentTarget.checked)}
                            />
                        </FlexBox>
                        <FlexBox flex="flex-1" width="w-full" alignItems="items-center" justifyContent="justify-center">
                            <Button
                                isFullWidth={isTrue}
                                size={sizeType as SizeType}
                                shape={shapeType as ShapeType}
                                variant={variantType as VariantType}
                                hasStartIcon={icon === 'startIcon'}
                                hasEndIcon={icon === 'endIcon'}
                                icon={icon === 'startIcon' ? <DeleteFilled /> : <AddFilled />}
                            >
                                {buttonText || '값을 입력해 주세요'}
                            </Button>
                        </FlexBox>
                    </FlexBox>
                </TabPanel>
                <TabPanel index={2} value={tab}>
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
                                Choose Button <span className="text-primary-600">Variant</span>
                            </Typography>
                            <RadioGroup
                                value={variantType}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setVariantType(e.currentTarget.value)}
                            >
                                {VARIANT.map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="iconVariant"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose Button <span className="text-primary-600">Size</span>
                            </Typography>
                            <RadioGroup
                                value={sizeType}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setSizeType(e.currentTarget.value)}
                            >
                                {SIZE.map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="iconSize"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose Button <span className="text-primary-600">Shape</span>
                            </Typography>
                            <RadioGroup
                                value={shapeType}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setShapeType(e.currentTarget.value)}
                            >
                                {SHAPE.map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="iconShape"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                        </FlexBox>
                        <FlexBox flex="flex-1" width="w-full" alignItems="items-center" justifyContent="justify-center">
                            <IconButton
                                size={sizeType as SizeType}
                                shape={shapeType as ShapeType}
                                variant={variantType as VariantType}
                            >
                                <CheckmarkFilled />
                            </IconButton>
                        </FlexBox>
                    </FlexBox>
                </TabPanel>
                <TabPanel index={3} value={tab}>
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
                                Choose Button <span className="text-primary-600">Size</span>
                            </Typography>
                            <RadioGroup
                                value={sizeType}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setSizeType(e.currentTarget.value)}
                            >
                                {SIZE.map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="buttonSize"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                        </FlexBox>
                        <FlexBox flex="flex-1" width="w-full" alignItems="items-center" justifyContent="justify-center">
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
                        </FlexBox>
                    </FlexBox>
                </TabPanel>
                <TabPanel value={tab} index={4}>
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
                            <TextField
                                labelText="Type Button Text"
                                helperText="최대 20자까지 입력할 수 있습니다."
                                name="buttonText"
                                isFullWidth
                                value={buttonText}
                                maxLength={20}
                                onChange={(e) => setButtonText(e.currentTarget.value)}
                            />
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Choose Button <span className="text-primary-600">Variant</span>
                            </Typography>
                            <RadioGroup
                                value={variantType}
                                isRow={!isTablet}
                                gap={isTablet ? 'gap-0' : 'gap-10'}
                                onChange={(e) => setVariantType(e.currentTarget.value)}
                            >
                                {VARIANT.map((val) => (
                                    <Radio
                                        key={val}
                                        size={isTablet ? 'small' : 'medium'}
                                        label={val}
                                        name="variant"
                                        value={val}
                                    />
                                ))}
                            </RadioGroup>
                            <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                                Is it <span className="text-primary-600">Deletable</span>?
                            </Typography>
                            <Checkbox
                                label="Deletable"
                                checked={isTrue}
                                size={isTablet ? 'small' : 'medium'}
                                onChange={(e) => setIsTrue(e.currentTarget.checked)}
                            />
                        </FlexBox>
                        <FlexBox flex="flex-1" alignItems="items-center" justifyContent="justify-center" gap="gap-20">
                            <Chip
                                variant={variantType as VariantType}
                                label={buttonText || '값을 입력해주세요'}
                                value={buttonText}
                                isDeletable={false}
                            />
                        </FlexBox>
                    </FlexBox>
                </TabPanel>
            </TabContainer>
        </FlexBox>
    );
}
