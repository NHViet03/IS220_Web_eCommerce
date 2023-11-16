import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import AccountPage from "./components/MyAccount/AccountPage";
import ChangePassword from "./components/MyAccount/ChangePassword";
import ManageAddress from "./components/MyAccount/ManageAddress";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/my-account',
    element: <AccountPage/>
  },
  {
    path: '/my-account/manage-address',
    element: <ManageAddress/>
  },
  {
    path: '/my-account/change-password',
    element: <ChangePassword/>
  }
];

export default AppRoutes;
