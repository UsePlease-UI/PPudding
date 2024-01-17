import { ChevronDownIcon } from '@heroicons/react/24/outline';

import FlexBox from 'components/Base/FlexBox';
import IconButton from 'components/Button/IconButton';

export default function IconButtonExample() {
    return (
        <FlexBox flexDirection="column" alignItems="center" gap={10} customCSS={{ margin: '20px 0' }}>
            <FlexBox gap={5}>
                <IconButton size="small" variant="outlined">
                    <ChevronDownIcon />
                </IconButton>
                <IconButton size="medium" variant="outlined">
                    <ChevronDownIcon />
                </IconButton>
                <IconButton size="large" variant="outlined">
                    <ChevronDownIcon />
                </IconButton>
            </FlexBox>
            <FlexBox gap={5}>
                <IconButton size="small" variant="contained">
                    <ChevronDownIcon />
                </IconButton>
                <IconButton size="medium" variant="contained">
                    <ChevronDownIcon />
                </IconButton>
                <IconButton size="large" variant="contained">
                    <ChevronDownIcon />
                </IconButton>
            </FlexBox>
            <FlexBox gap={5}>
                <IconButton size="small" variant="text">
                    <ChevronDownIcon />
                </IconButton>
                <IconButton size="medium" variant="text">
                    <ChevronDownIcon />
                </IconButton>
                <IconButton size="large" variant="text">
                    <ChevronDownIcon />
                </IconButton>
            </FlexBox>
        </FlexBox>
    );
}
