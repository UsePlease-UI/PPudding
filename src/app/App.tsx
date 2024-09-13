import { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import BaseLayout from '@layouts/BaseLayout';

import Home from '@pages/Home';

import Error from './Error';
import Loader from './Loader';

const Editor = lazy(() => import('@pages/Demo/Editor'));
const FAQ = lazy(() => import('@pages/Demo/FAQ'));
const Register = lazy(() => import('@pages/Demo/Register'));
const Search = lazy(() => import('@pages/Demo/Search'));
const Examples = lazy(() => import('@pages/Examples'));

export default function App() {
  return (
    <RouterProvider
      router={createHashRouter([
        {
          path: '',
          element: <BaseLayout />,
          errorElement: <Error />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'example/:component',
              element: (
                <Suspense fallback={<Loader />}>
                  <Examples />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: '/demo',
          element: <BaseLayout />,
          errorElement: <Error />,
          children: [
            {
              path: 'faq',
              element: (
                <Suspense fallback={<Loader />}>
                  <FAQ />
                </Suspense>
              ),
            },
            {
              path: 'search',
              element: (
                <Suspense fallback={<Loader />}>
                  <Search />
                </Suspense>
              ),
            },
            {
              path: 'editor',
              element: (
                <Suspense fallback={<Loader />}>
                  <Editor />
                </Suspense>
              ),
            },
            {
              path: 'register',
              element: (
                <Suspense fallback={<Loader />}>
                  <Register />
                </Suspense>
              ),
            },
          ],
        },
      ])}
    />
  );
}
