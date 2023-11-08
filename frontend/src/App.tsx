import React from 'react';
import './App.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewGame from './pages/new-game/NewGame';
import Profile from './pages/profile/profile';
import NotFound from './pages/not-found/NotFound';
import PrincipalPage from './pages/principal-page/PrincipalPage';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';
import Nav from './components/nav/Nav';
import Synopsis from './pages/new-game/Synopsis';
import ChooseCharacter from './pages/new-game/ChooseCharacter';


const App: React.FC = () => {

  const LayoutLoggedIn = () => {
    return (
      <div className="container-app">
        <Nav/>
        <div className="window">
          <Outlet />
        </div>
        <Footer/>
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
          path: '/profile',
          element: <Profile/>
        },
        {
          path: '/newgame',
          element: <NewGame/>
        },
        {
          path: '/newgame/synopsis',
          element: <Synopsis/>
        }, 
        {
          path: '/newgame/choose-character',
          element: <ChooseCharacter/>
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
    <RouterProvider router={router}/>
  )
};

export default App;