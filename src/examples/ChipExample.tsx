/* eslint-disable no-console */
import FlexBox from '@atoms/FlexBox';
import Chip from '@molecules/Chip';

export default function ChipExample() {
    return (
        <FlexBox gap={10}>
            <Chip label="아이스크림" value="ice cream" isDeletable={false} onDelete={(value) => console.log(value)} />
            <Chip label="삭제 가능" value="deletable" isDeletable onDelete={(value) => console.log(value)} />
        </FlexBox>
    );
}
