import FlexBox from 'components/Base/FlexBox';
import Chip from 'components/Button/Chip';

export default function ChipExample() {
    const handleDelete = (value: string | number) => {
        // eslint-disable-next-line no-console
        console.log(value);
    };

    return (
        <FlexBox gap={10} customCSS={{ margin: '20px 0' }}>
            <Chip label="아이스크림" value="ice cream" isDeletable={false} />
            <Chip label="삭제 가능" value="deletable" isDeletable onDelete={handleDelete} />
        </FlexBox>
    );
}