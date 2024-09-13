import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@app/App';

import { AlertProvider } from '@components/useAlert';

import '@styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AlertProvider>
            <App />
        </AlertProvider>
    </React.StrictMode>,
);
