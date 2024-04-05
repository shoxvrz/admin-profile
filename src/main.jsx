import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Landing = lazy(() => import("./Pages/Landing/Landing.jsx"));
const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const About = lazy(() => import('./Pages/About/About.jsx'));
const Admin = lazy(() => import('./Pages/Admin/Admin.jsx'));
const Contact = lazy(() => import('./Pages/Contact/Contact.jsx'));
const Login = lazy(() => import('./Pages/Login/Login.jsx'));
const Profile = lazy(() => import('./Pages/Profile/Profile.jsx'))
const Register = lazy(() => import('./Pages/Register/Register.jsx'))
const Auth1 = lazy(() => import('./service/Auth1/Auth1.jsx'))
const Auth2 = lazy(() => import('./service/Auth2/Auth2.jsx'))

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: '/admin',
        element: <Auth1/>,
        children: [
          {
            path: '/admin',
            element: <Admin/>
          }
        ]
      },
      {
        path: '/profile',
        element: <Auth2/>,
        children: [
          {
            path: '/profile',
            element: <Profile/>
          }
        ]
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>...Loading</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
