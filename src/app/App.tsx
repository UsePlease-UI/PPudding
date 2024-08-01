import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import BaseLayout from '@layouts/BaseLayout';

import Editor from '@pages/Demo/Editor';
import FAQ from '@pages/Demo/FAQ';
import Register from '@pages/Demo/Register';
import Search from '@pages/Demo/Search';
import Example from '@pages/Examples';
import Home from '@pages/Home';

import Error from './Error';

export default function App() {
    return (
        <RouterProvider
            router={createBrowserRouter(
                [
                    {
                        path: '',
                        element: <BaseLayout />,
                        errorElement: <Error />,
                        children: [
                            {
                                index: true,
                                element: <Home />
                            },
                            {
                                path: 'example/:component',
                                element: <Example />
                            }
                        ]
                    },
                    {
                        path: '/demo',
                        element: <BaseLayout />,
                        errorElement: <Error />,
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
                    }
                ],
                { basename: '/react-components' }
            )}
        />
    );
}
