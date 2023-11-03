import React from 'react';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewGame from './pages/newgame/NewGame';
import Homepage from './pages/homepage/Homepage';
import Perfil from './pages/perfil/Perfil';
import NotFound from './pages/not-found/NotFound';


const App: React.FC = () => {

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

  return (
    <NewGame/>
  )
};

export default App;