/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';

import { FlexBox } from 'components/Base';

import { layoutStyle } from './styles';

const DemoLayout = () => {
    return (
        <div css={layoutStyle.container}>
            <div css={layoutStyle.aside}>
                <h1 css={layoutStyle.heading}>Accordion</h1>
            </div>
            <main css={layoutStyle.main}>
                <FlexBox flexDirection="column" customCSS={layoutStyle.contents}>
                    <Outlet />
                </FlexBox>
            </main>
        </div>
    );
};

export default DemoLayout;
