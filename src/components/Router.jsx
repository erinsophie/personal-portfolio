import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
