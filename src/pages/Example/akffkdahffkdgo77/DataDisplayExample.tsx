import { useState } from 'react';

import { HomeIcon } from '@heroicons/react/24/outline';

import { Accordion, AccordionHeader, AccordionPanel } from 'components/Accordion';
import { Divider, FlexBox, Typography } from 'components/Base';
import Pagination from 'components/Shared/Pagination';
import { TabContainer, Tab, TabItem, TabPanel } from 'components/Tab';
import { Table, TableBody, TableCell, TableHead, TableRow } from 'components/Table';

export default function DataDisplayExample() {
    const [panel, setPanel] = useState('panel1');

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
        <FlexBox flexDirection="column" gap={10}>
            <Typography component="h2" fontSize={24}>
                Accordion
            </Typography>
            <Accordion isExpanded={panel === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionHeader>Controlled - Q1</AccordionHeader>
                <AccordionPanel>Apple</AccordionPanel>
            </Accordion>
            <Accordion>
                <AccordionHeader>Uncontrolled - Q2</AccordionHeader>
                <AccordionPanel>Banana</AccordionPanel>
            </Accordion>
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                Tab
            </Typography>
            <TabContainer>
                <Tab aria-label="navigation" value={value} onChange={handleTabChange}>
                    <TabItem icon={<HomeIcon />} label="1" value={value} index={1} />
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
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                Table
            </Typography>
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
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                Pagination
            </Typography>
            <FlexBox flexDirection="column" gap={40}>
                <FlexBox flexDirection="column" gap={10}>
                    <Typography fontSize={16} fontWeight="700">
                        Variant
                    </Typography>
                    <Pagination totalCount={280} pageRange={10} />
                    <Pagination variant="contained" totalCount={280} pageRange={10} />
                    <Pagination variant="text" totalCount={280} pageRange={10} />
                </FlexBox>
                <FlexBox flexDirection="column" gap={10}>
                    <Typography fontSize={16} fontWeight="700">
                        Shape
                    </Typography>
                    <Pagination shape="square" totalCount={280} pageRange={10} />
                    <Pagination shape="rounded" totalCount={280} pageRange={10} />
                    <Pagination shape="circular" totalCount={280} pageRange={10} />
                </FlexBox>
                <FlexBox flexDirection="column" gap={10}>
                    <Typography fontSize={16} fontWeight="700">
                        Size
                    </Typography>
                    <Pagination size="large" totalCount={280} pageRange={10} />
                    <Pagination size="medium" totalCount={280} pageRange={10} />
                    <Pagination size="small" totalCount={280} pageRange={10} />
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}
