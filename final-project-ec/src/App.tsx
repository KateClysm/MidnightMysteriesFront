import React from 'react';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Perfil from './pages/perfil/Perfil';
import NotFound from './pages/not-found/NotFound';
import PrincipalPage from './pages/principal-page/PrincipalPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';


const App: React.FC = () => {

  const LayoutLoggedIn = () => {
    return (
      <div className="container-app">
        <Nav />
        <div className="window">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <LayoutLoggedIn />,
      children: [
        {
          path: '/',
          element: 
            <>
             <PrincipalPage/>
            </>
        },
        {
          path: '/perfil',
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