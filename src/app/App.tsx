import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import DemoLayout from 'layout/DemoLayout';
import FAQ from 'pages/Demo/FAQ';
import Guide from 'pages/Guide';
import Home from 'pages/Home';

export default function App() {
    return (
        <RouterProvider
            router={createBrowserRouter(
                [
                    {
                        path: '',
                        element: <Home />
                    },
                    {
                        path: '/demo',
                        element: <DemoLayout />,
                        children: [
                            {
                                path: 'faq',
                                element: <FAQ />
                            }
                        ]
                    },
                    {
                        path: '/guide',
                        element: <Guide />,
                        children: [
                            {
                                path: 'accordion',
                                element: <Outlet />
                            }
                        ]
                    }
                ],
                { basename: process.env.PUBLIC_URL }
            )}
        />
    );
}
