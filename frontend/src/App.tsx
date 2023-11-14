import React from 'react';
import './app.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './pages/profile/profile';
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
          path: '/profile',
          element: <Profile userCharacter={exampleCharacter} playerProfile={exampleUser}/>
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