import DragNDrop from 'components/atoms/DragNDrop';
import FlexBox from 'components/atoms/FlexBox';

const SAMPLE_LIST = [
    {
        idx: 1,
        label: 'first',
        value: 'first item'
    },
    {
        idx: 2,
        label: 'second',
        value: 'second item'
    },
    {
        idx: 3,
        label: 'third',
        value: 'third item'
    },
    {
        idx: 4,
        label: 'fourth',
        value: 'fourth item'
    },
    {
        idx: 5,
        label: 'fifth',
        value: 'fifth item'
    },
    {
        idx: 6,
        label: 'sixth',
        value: 'sixth item'
    }
];

export default function DragNDropExample() {
    return (
        <FlexBox gap={10}>
            <DragNDrop title="My Drag List" list={SAMPLE_LIST} />
        </FlexBox>
    );
}
