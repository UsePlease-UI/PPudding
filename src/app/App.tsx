import { BrowserRouter } from 'react-router-dom';

import Layout from '@layouts/Layout';

export default function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}
