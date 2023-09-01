import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact'

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
        {
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
