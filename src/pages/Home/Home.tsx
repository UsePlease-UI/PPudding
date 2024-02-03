/** @jsxImportSource @emotion/react */
import { A_LIST, K_LIST } from 'constants/constants';
import { palette } from 'styles';

import { FlexBox, Typography } from 'components/Base';

import List from './components/List';

export default function Home() {
    return (
        <FlexBox flexDirection="column" gap={40}>
            <Typography component="h2" fontSize={24} fontWeight="900" color={palette.primary[600]} gutterBottom={-20}>
                Kimyerim1935
            </Typography>
            <List data={K_LIST} />
            <Typography component="h2" fontSize={24} fontWeight="900" color={palette.primary[600]} gutterBottom={-20}>
                akffkdahffkdgo77
            </Typography>
            <List data={A_LIST} />
        </FlexBox>
    );
}
