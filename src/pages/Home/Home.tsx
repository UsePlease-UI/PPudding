import { FlexBox, Typography } from '@components/Base';

import { A_LIST, K_LIST } from '@constants/constants';

import List from './components/List';

export default function Home() {
    return (
        <FlexBox flexDirection="flex-col" gap="gap-40">
            <Typography
                component="h2"
                fontSize="text-24"
                fontWeight="font-black"
                color="text-primary-600"
                margin="-mb-20"
            >
                akffkdahffkdgo77
            </Typography>
            <List data={A_LIST} />
            <Typography
                component="h2"
                fontSize="text-24"
                fontWeight="font-black"
                color="text-primary-600"
                margin="-mb-20"
            >
                Kimyerim1935
            </Typography>
            <List data={K_LIST} />
        </FlexBox>
    );
}
