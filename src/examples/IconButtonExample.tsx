import FlexBox from '@atoms/FlexBox';
import IconButton from '@molecules/IconButton';

import { ChevronDownIcon } from '@assets/icons';

export default function IconButtonExample() {
    return (
        <FlexBox direction="column" gap={10}>
            <FlexBox gap={5}>
                <IconButton size="small">
                    <ChevronDownIcon />
                </IconButton>
                <IconButton size="medium">
                    <ChevronDownIcon />
                </IconButton>
                <IconButton>
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
                <IconButton variant="contained">
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
                <IconButton variant="text">
                    <ChevronDownIcon />
                </IconButton>
            </FlexBox>
        </FlexBox>
    );
}
