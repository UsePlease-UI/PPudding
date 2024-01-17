/** @jsxImportSource @emotion/react */
import { useSearchParams } from 'react-router-dom';

import Description from './components/Description';
import { getComponents } from './examples/utils';

export default function Home() {
    const [params] = useSearchParams();
    const selected = params.get('component') || 'Accordion';

    return (
        <>
            <Description />
            {getComponents(selected)}
        </>
    );
}
