import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog';
import Login from './components/Login-Register/Login';
import Register from './components/Login-Register/Register';
import ErrorPage from './components/Error/Error';
import ShowError from './components/Error/ShowError';
import ChefDetails from './components/ChefDetails/ChefDetails';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/error",
        element: <ShowError></ShowError>
      },
      {
        path: "/ChefDetails",
        element: <PrivateRoute>
          <ChefDetails></ChefDetails>
        </PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
