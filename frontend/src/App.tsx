import React from 'react';
import './App.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
<<<<<<< HEAD:final-project-ec/src/App.tsx
import NewGame from './pages/newgame/NewGame';
=======
<<<<<<< HEAD:final-project-ec/src/App.tsx
>>>>>>> b0cae2f8cb8938738d0eb928a9d619830a0d02a5:frontend/src/App.tsx
import Homepage from './pages/homepage/Homepage';
import Profile from './pages/profile/profile';
=======
import Perfil from './pages/perfil/Perfil';
>>>>>>> b8d86e0367be11ac89564fa5643e80fe4acd01e3:frontend/src/App.tsx
import NotFound from './pages/not-found/NotFound';
import PrincipalPage from './pages/principal-page/PrincipalPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';


const App: React.FC = () => {

<<<<<<< HEAD:final-project-ec/src/App.tsx
  // const Layout = () => {
  //   return (
  //     <div className="container-app">
  //       <h1 className="title">FINAL PROJECT</h1>

  //       <div className="window">
  //         <Outlet />
  //       </div>

  //     </div>
  //   );
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: '/', 
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '/',
  //         element: 
  //           <>
  //            <Homepage/>
  //           </>
  //       },
  //       {
  //         path: '/perfil',
  //         element: <Perfil/>
  //       },
  //       {
  //         path: '/newgame',
  //         element: <NewGame/>
  //       }
  //     ]
  //   },
  //   {
  //     path: '/*',
  //     element: <NotFound />
  //   }
  // ]);

  // return (
  //   <div>
  //     <RouterProvider router={router} />
  //   </div>
  // );
=======
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
          element: <Profile/>
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
>>>>>>> b0cae2f8cb8938738d0eb928a9d619830a0d02a5:frontend/src/App.tsx

  return (
    <NewGame/>
  )
};

export default App;