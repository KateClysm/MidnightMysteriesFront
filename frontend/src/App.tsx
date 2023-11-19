import React from 'react';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';
import PrincipalPage from './pages/principal-page/PrincipalPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import ExampleMobile from './pages/example-mobile-first/ExampleMobile';
import Perfil from './pages/perfil/Perfil';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Landing from './pages/landing/Landing';
import ExamplePattern from './pages/example-pattern/ExamplePattern';

const App: React.FC = () => {

  const LayoutLoggedIn = () => {
    return (
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
    );
  };

  const LayoutLanding = () => {
    return (
      <>
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <LayoutLanding />,
      children: [
        {
          path: '/',
          element: <Landing />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        },
        
      ]
    },
    {
      path: '/home/', 
      element: <LayoutLoggedIn />,
      children: [
        {
          path: '/home/',
          element: <PrincipalPage/>
        },
        {
          path: '/home/profile',
          element: <Perfil/>
        },
      ]
    },

    {
      path: '/examplemobile',
      element: <ExampleMobile />
    },

    {
      path: '/examplepattern',
      element: <ExamplePattern />
    },

    {
      path: '/*',
      element: <NotFound />
    },
    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;