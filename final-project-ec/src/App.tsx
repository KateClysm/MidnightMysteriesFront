import React from 'react';
import './App.scss';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Perfil from './pages/perfil/Perfil';
import NotFound from './pages/not-found/NotFound';
import Register from './pages/register/Register';


const App: React.FC = () => {

  const Layout = () => {
    return (
      <div className="container-app">
        <h1 className="title">FINAL PROJECT</h1>

        <div className="window">
          <Outlet />
        </div>

      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />,
      children: [
        {
          path: '/',
          element: 
            <>
             <Homepage/>
            </>
        },
        {
          path: '/perfil',
          element: <Perfil/>
        },
      ]
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;