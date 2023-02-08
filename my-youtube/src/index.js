import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
 import {
   useQuery,
   useMutation,
   useQueryClient,
   QueryClient,
   QueryClientProvider,
 } from 'react-query'
import App from './App';
import Home, {loader as homeLoader} from './pages/Home';
import ErrorPage from './pages/error-page';
import Search, { loader as searchLoader } from './pages/Search';
import Watch, {loader as watchLoader} from './pages/Watch';
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "/videos/:search",
        element: <Search />,
        loader: searchLoader
      },
      {
        path: "/videos/watch/:videoId",
        element: <Watch />,
        loader: watchLoader
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <App />
      </QueryClientProvider>
    </RouterProvider>
  // </React.StrictMode>
);

