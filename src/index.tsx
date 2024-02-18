import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';
import reset from 'styles/reset';

import App from 'app/App';
import { AlertProvider } from 'components/useAlert';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Global styles={reset} />
        <AlertProvider>
            <App />
        </AlertProvider>
    </React.StrictMode>
);
