import FlexBox from 'components/Base/FlexBox';

const customCSS = { width: '100%', padding: 10 };

type BlockWrapperType = {
    children: React.ReactNode;
};

export default function BlockWrapper({ children }: BlockWrapperType) {
    return (
        <FlexBox direction="column" gap={4} customCSS={customCSS}>
            {children}
        </FlexBox>
    );
}
