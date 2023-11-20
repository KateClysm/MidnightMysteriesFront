import React from 'react';
<<<<<<< HEAD
import './app.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './pages/profile/profile';
=======
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
>>>>>>> origin/main
import NotFound from './pages/not-found/NotFound';
import PrincipalPage from './pages/principal-page/PrincipalPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';
import { ICharacter } from './interfaces&types/ICharacter';
import { TUser } from './interfaces&types/TUser';
import UrlImage from './assets/user.jpeg'

// Ejemplo
const exampleCharacter: ICharacter= {
  image: UrlImage,
  name: "David",
  sanity: "Alive",
  state: true,
  age: 16,
  relatives: "",
  ending: "End 1",
};

const exampleUser: TUser = {
  username: "Apolo123",
  email: "apol@gmail.com",
  age: 13,
  unlocked_characters: 2,
  unlocked_endings: 1,
  unlocked_objects: 3,
  times_played: 10,
  member_since: 2,
};


import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
import Profile from './pages/profile/profile';
import ExampleMobile from './pages/example-mobile-first/ExampleMobile'
import ExamplePattern from './pages/example-pattern/ExamplePattern'

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
<<<<<<< HEAD
          element: 
            <>
              <PrincipalPage/>
            </>
        },
        {
          path: '/profile',
          element: <Profile userCharacter={exampleCharacter} playerProfile={exampleUser}/>
=======
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
          element: <Profile/>
>>>>>>> origin/main
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