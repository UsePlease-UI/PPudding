import { useState } from 'react';

import { Accordion, AccordionHeader, AccordionPanel } from '@components/Accordion';
import { FlexBox, Typography } from '@components/Base';
import { ShapeType, SizeType, ToggleButton, ToggleButtonGroup, VariantType } from '@components/Button';
import { Radio, RadioGroup } from '@components/Form';
import Pagination from '@components/Shared/Pagination';
import { TabContainer, Tab, TabItem, TabPanel } from '@components/Tab';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@components/Table';

import { HomeFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

const SIZE = ['small', 'medium', 'large'];
const VARIANT = ['outlined', 'contained', 'text'];
const SHAPE = ['square', 'rounded', 'circular'];

export default function DataDisplayExample() {
    const { isMobile, isTablet } = useMobile();

    const [selected, setSelected] = useState('Accordion');
    const [panel, setPanel] = useState('panel1');

    const [sizeType, setSizeType] = useState(SIZE[0]);
    const [shapeType, setShapeType] = useState(SHAPE[0]);
    const [variantType, setVariantType] = useState(VARIANT[0]);

    // Reference : https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript
    // *함수를 return하는 함수
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleChange =
        (selectedPanel: string) => (_event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => {
            // eslint-disable-next-line no-console
            console.log('i am controlled!', selectedPanel);
            // eslint-disable-next-line no-console
            console.log('i am currently expanded', isExpanded);
            setPanel(selectedPanel);
        };

    const [value, setValue] = useState(1);

    const handleTabChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <FlexBox flexDirection="flex-col" gap="gap-10">
            <Typography
                component="h2"
                fontSize="text-24"
                fontWeight="font-black"
                color="text-primary-600"
                textTransform="uppercase"
                margin={isTablet ? 'mb-10' : 'mb-20'}
            >
                Data Display Playground
            </Typography>
            <div className="max-w-full overflow-x-auto scrollbar-hide">
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Accordion"
                    >
                        Accordion
                    </ToggleButton>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Tab"
                    >
                        Tab
                    </ToggleButton>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Table"
                    >
                        Table
                    </ToggleButton>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Pagination"
                    >
                        Pagination
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            {selected === 'Accordion' && (
                <>
                    <Accordion isExpanded={panel === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionHeader>Controlled - Q1</AccordionHeader>
                        <AccordionPanel>Apple</AccordionPanel>
                    </Accordion>
                    <Accordion>
                        <AccordionHeader>Uncontrolled - Q2</AccordionHeader>
                        <AccordionPanel>Banana</AccordionPanel>
                    </Accordion>
                </>
            )}
            {selected === 'Tab' && (
                <>
                    <TabContainer>
                        <Tab aria-label="navigation" value={value} onChange={handleTabChange}>
                            <TabItem icon={<HomeFilled />} value={value} index={1} />
                            <TabItem label="2" value={value} index={2} />
                            <TabItem label="3" value={value} index={3} />
                        </Tab>
                        <TabPanel value={value} index={1}>
                            <Typography component="p">Tab Panel #1</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Typography component="p">Tab Panel #2</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Typography component="p">Tab Panel #3</Typography>
                        </TabPanel>
                    </TabContainer>
                </>
            )}
            {selected === 'Table' && (
                <Table aria-label="제품 리스트">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th">제품명</TableCell>
                            <TableCell component="th">브랜드명</TableCell>
                            <TableCell component="th">설명</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">바나나</TableCell>
                            <TableCell align="center">바나나차차</TableCell>
                            <TableCell>바나나나나나나나나</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2} align="center">
                                망고
                            </TableCell>
                            <TableCell>망고고고고고고고고고</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )}
            {selected === 'Pagination' && (
                <FlexBox
                    width="w-full"
                    flexDirection={isTablet ? 'flex-col-reverse' : 'flex-row'}
                    gap="gap-20"
                    padding="p-20"
                    border="border"
                    borderColor="border-primary-100"
                    borderRadius="rounded"
                >
                    <FlexBox
                        flex="flex-1"
                        flexDirection="flex-col"
                        gap={isTablet ? 'gap-5' : 'gap-10'}
                        justifyContent="justify-start"
                        padding="p-20"
                        border="border"
                        borderColor="border-primary-600"
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
                    </FlexBox>
                    <div className="flex w-full flex-1 items-center justify-center overflow-x-auto scrollbar-hide">
                        <div className="w-max">
                            <Pagination
                                variant={variantType as VariantType}
                                size={sizeType as SizeType}
                                shape={shapeType as ShapeType}
                                totalCount={280}
                                pageRange={isTablet ? 1 : 3}
                            />
                        </div>
                    </div>
                </FlexBox>
            )}
        </FlexBox>
    );
}
