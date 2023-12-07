import React from 'react';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './pages/profile/profile';
import NotFound from './pages/not-found/NotFound';
import PrincipalPage from './pages/principal-page/PrincipalPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
// import ButtonHelp from './components/button-help/buttonHelp';
import Help from './pages/help-page/Help';
import TestButton from './components/test-button/TestButton';
import ConectionExample from './pages/conection-example/ConectionExample';
import Characters from './pages/unlocked_characters/Unlocked_Characters';
import Synopsis from './pages/new-game/Synopsis';
import ChooseCharacter from './pages/new-game/ChooseCharacter';

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

  const LayoutNewGame = () => {
    return (
      <>
      <Nav />
      <TestButton />
      <div>
        <Outlet />
      </div>
      <Footer />
      </>
    )
  }

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
        {
          path: '/home/conection',
          element: <ConectionExample/>
        },
{
          path: '/home/characters',
          element: <Characters/>
        },
        
      ]
    },
    {
      path: '/newgame',
      element: <LayoutNewGame />,
      children: [
        {
          path: '/newgame/',
          element: <Synopsis />
        },
        {
          path: '/newgame/character',
          element: <ChooseCharacter />
        }
      ]
    },
    {
      path: '/*',
      element: <NotFound />
    },
    
  ]);

  return (
    <RouterProvider router={router}/>
  )
};

export default App;