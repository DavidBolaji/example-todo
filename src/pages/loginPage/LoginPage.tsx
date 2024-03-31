import { useEffect, useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import Loader from "../../components/Loader/Loader";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <HeaderComponent />
      <LoginComponent />
    </>
  );
};

export default LoginPage;
