import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './App';
import Home from './pages/Home';
import ErrorPage from './pages/error-page';
import Watch from './pages/Watch';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/videos/:keyword",
        element: <Home />,
      },
      {
        path: "/videos/watch/:videoId",
        element: <Watch />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  // </React.StrictMode>
);

