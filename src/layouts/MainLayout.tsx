import { Outlet } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function MainLayout() {
  // const { isAuth } = useAuth

  // useEffect(() => {
  //   // if auth redirect to ....
  //   // else ....
  // },[isAuth])

  return (
    <>
      <Outlet />
    </>
  );
}
