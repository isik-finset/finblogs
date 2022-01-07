import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
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

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/landing" replace />, index: true },
        { path: '/landing', element: <LandingPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/user-profile', element: <UserProfilePage /> }, // protected route
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
  ]);
}

// Routes
const LandingPage = Loadable(lazy(() => import('../pages/Landing')));
const LoginPage = Loadable(lazy(() => import('../pages/Login')));
const UserProfilePage = Loadable(lazy(() => import('../pages/UserProfile')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));


