import FlexBox from 'components/atoms/FlexBox';
import AutoComplete from 'components/molecules/AutoComplete';

export default function AutoCompleteExample() {
    return (
        <FlexBox direction="column" gap={10}>
            <h2>AutoComplete</h2>
            <AutoComplete />
        </FlexBox>
    );
}
