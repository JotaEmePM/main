import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './shared/layout/baselayout';

import {ErrorPage} from './shared/error-page';
import { MainPage } from './pages/blog/main-page';
import { CVPage } from './pages/cv/main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/cv',
        element: <CVPage />
      }
    ]
  },
  
  // ,
  // {
  //   path: '/blog/:slug'
  // }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
