import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Login } from "./pages";
import HomeLayout from "./components/Layout/HomeLayout/HomeLayout";
import DashboardLayout from "./components/Layout/DashboardLayout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <Login />
      </HomeLayout>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
