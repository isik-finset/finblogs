import { Suspense, lazy, ElementType } from 'react';
import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/MainLayout';
// components
import LoadingScreen from '../components/LoadingScreen';


// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
(
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export default function Router(isAuth: boolean) {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/landing" replace />, index: true },
        { path: '/landing', element: <LandingPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/register', element: <Register /> },
        { path: '/user-profile', element: !isAuth ? <LoginPage /> : < UserProfilePage /> }, // protected route
      ],
    },
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ];

  return routes

}

// Routes
const LandingPage = Loadable(lazy(() => import('../pages/Landing')));
const LoginPage = Loadable(lazy(() => import('../pages/Login')));
const UserProfilePage = Loadable(lazy(() => import('../pages/UserProfile')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const Register = Loadable(lazy(() => import('../pages/Register')))


