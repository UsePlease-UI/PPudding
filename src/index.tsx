import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';
import reset from 'styles/reset';

import App from 'app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Global styles={reset} />
        <App />
    </React.StrictMode>
);
