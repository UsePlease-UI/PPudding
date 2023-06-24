export const CHECKBOX_CODE_SNIPPET = `
    const [chocolate, setChocolate] = useState(false);
    const [candy, setCandy] = useState(false);

    <Checkbox
        label="초콜릿"
        value="chocolate"
        checked={chocolate}
        icon={<HeartIcon />}
        checkedIcon={<SolidHeartIcon />}
        onChange={() => setChocolate((prev) => !prev)}
    />
    <Checkbox label="사탕" value="candy" checked={candy} onChange={() => setCandy((prev) => !prev)} />

`;

export const CHECKBOX_SHORT_SNIPPET = `
    <Checkbox
        label="초콜릿"
        value="chocolate"
        checked={chocolate}
        icon={<HeartIcon />}
        checkedIcon={<SolidHeartIcon />}
        onChange={() => setChocolate((prev) => !prev)}
    />

`;
