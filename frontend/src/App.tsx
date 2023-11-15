import React from 'react';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Perfil from './pages/perfil/Perfil';
import NotFound from './pages/not-found/NotFound';
import PrincipalPage from './pages/principal-page/PrincipalPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';
import Landing from './pages/layout-landing/landing/Landing';
import LayoutLanding from './pages/layout-landing/LayoutLanding';

const App: React.FC = () => {

  const LayoutLoggedIn = () => {
    return (
      <div className="container-app">
        <Nav />
        <Outlet />
        <Footer />
      </div>
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
          element: <Register />
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
          path: '/home/perfil',
          element: <Perfil/>
        },
      ]
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