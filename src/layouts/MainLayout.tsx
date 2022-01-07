import { Outlet } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function MainLayout() {

  // Todo by Monday
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
