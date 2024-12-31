import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '../pages/_layouts/app';
import { Home } from '@/pages/app/home';
import { NotFound } from '@/pages/app/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
