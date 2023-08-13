export const AUTOCOMPLETE_SHORT = `
    <AutoComplete
        label="autoComplete"
        listArr={listArr}
        inputValue={inputValue}
        onChange={handleChange}
        onSelect={(e) => setSelectedItem(e)}
    />
`;

export const AUTOCOMPLETE_CODE_SNIPPET = `
    const [listArr, setListArr] = useState<ListType[]>(LIST);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<ListType>();

    const handleSearch = useCallback(
        _.debounce((value: string) => {
            let newArr = [];
            if (value.length !== 0 && value !== '') {
                newArr = LIST.filter((el: ListType) => el.label.includes(value));
                setListArr(newArr);
            } else {
                setListArr(LIST);
            }
        }, 100),
        []
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        handleSearch(value);
    };

    return (
        <FlexBox direction="column" gap={10}>
            <h2>AutoComplete</h2>
            <span>선택된 항목의 label: {selectedItem?.label}</span>
            <AutoComplete
                label="autoComplete"
                listArr={listArr}
                inputValue={inputValue}
                onChange={handleChange}
                onSelect={(e) => setSelectedItem(e)}
            />
        </FlexBox>
    );
`;
