import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import BaseLayout from 'layout/BaseLayout';
import DemoLayout from 'layout/DemoLayout/DemoLayout';
import Editor from 'pages/Demo/Editor';
import FAQ from 'pages/Demo/FAQ';
import Register from 'pages/Demo/Register';
import Search from 'pages/Demo/Search';
import Guide from 'pages/Guide';
import Home from 'pages/Home';

export default function App() {
    return (
        <RouterProvider
            router={createBrowserRouter(
                [
                    {
                        path: '',
                        element: <BaseLayout />,
                        children: [
                            {
                                path: '',
                                element: <Home />
                            }
                        ]
                    },
                    {
                        path: '/demo',
                        element: <DemoLayout />,
                        children: [
                            {
                                path: 'faq',
                                element: <FAQ />
                            },
                            {
                                path: 'search',
                                element: <Search />
                            },
                            {
                                path: 'editor',
                                element: <Editor />
                            },
                            {
                                path: 'register',
                                element: <Register />
                            }
                        ]
                    },
                    {
                        path: '/guide',
                        element: <Guide />,
                        children: [
                            {
                                path: ':component',
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
