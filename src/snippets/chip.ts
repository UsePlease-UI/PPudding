export const CHIP_CODE_SNIPPET = `
    const handleDelete = (value: string | number) => {
        console.log(value);
    };

    return (
        <FlexBox gap={10}>
            <Chip label="아이스크림" value="ice cream" isDeletable={false} />
            <Chip label="삭제 가능" value="deletable" isDeletable onDelete={handleDelete} />
        </FlexBox>
    );
    
`;

export const CHIP_SHORT_SNIPPET = `
    <Chip label="아이스크림" value="ice cream" isDeletable={false} />
    
`;
