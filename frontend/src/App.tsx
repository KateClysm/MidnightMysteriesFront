import React from 'react';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';
import PrincipalPage from './pages/principal-page/PrincipalPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
import Profile from './pages/profile/profile';
// import ButtonHelp from './components/button-help/buttonHelp';
import Help from './pages/help-page/Help';
import TestButton from './components/test-button/TestButton';

const App: React.FC = () => {

  const LayoutHomepage = () => {
    return (
      <>
        <Nav />
        <TestButton/>
        <div className="display-between">
          <Outlet />
          <Footer />
        </div>
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
      path: '/home', 
      element: <LayoutHomepage />,
      children: [
        {
          path: '/home',
          element: <PrincipalPage/>
        },
        {
          path: '/home/profile',
          element: <Profile/>
        },
        {
          path: '/home/help',
          element: <Help/>
        },
      ]
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