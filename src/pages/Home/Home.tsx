/** @jsxImportSource @emotion/react */
import { palette } from 'styles';

import { FlexBox, Typography } from 'components/Base';

import List from './components/List';

export default function Home() {
    return (
        <FlexBox flexDirection="column" gap={40}>
            <Typography component="h2" fontSize={24} fontWeight="900" color={palette.primary[600]} gutterBottom={-20}>
                Kimyerim1935
            </Typography>
            <FlexBox flexDirection="column" gap={10}>
                <Typography component="h3" fontSize={18} fontWeight="600" color={palette.primary[600]}>
                    Main Components
                </Typography>
                <List data={['Autocomplete', 'Drag N Drop API', 'Pagination', 'Popover']} />
            </FlexBox>
            <Typography component="h2" fontSize={24} fontWeight="900" color={palette.primary[600]} gutterBottom={-20}>
                akffkdahffkdgo77
            </Typography>
            <FlexBox flexDirection="column" gap={10}>
                <Typography component="h3" fontSize={18} fontWeight="700" color={palette.primary[600]}>
                    Main Components
                </Typography>
                <List
                    data={[
                        'Accordion',
                        'Button',
                        'Chip',
                        'Icon Button',
                        'Toggle Button',
                        'Select',
                        'Checkbox',
                        'Radio',
                        'TextField',
                        'Skeleton',
                        'Tab',
                        'Table'
                    ]}
                />
                <Typography component="h3" fontSize={18} fontWeight="700" color={palette.primary[600]}>
                    Shared Components
                </Typography>
                <List isShared data={['Autocomplete', 'Pagination', 'Popover']} />
            </FlexBox>
        </FlexBox>
    );
}
