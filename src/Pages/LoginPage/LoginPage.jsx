import { useDispatch } from "react-redux";
import { loginOperation } from "../../Shared/Redux/auth/auth-operations";
import { Navigate } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import useAuth from "../../Shared/hooks/useAuth";
import s from "./LoginPage.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = (data) => {
    dispatch(loginOperation(data));
  };
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/products" />;
  }
  return (
    <div className="container">
      <div className={s.bgcolor}>
        <LoginForm onSubmit={onLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
