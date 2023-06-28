import { useDispatch } from "react-redux";
import { loginOperation } from "../../Shared/Redux/auth/auth-operations";
import { Navigate } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import useAuth from "../../Shared/hooks/useAuth";

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
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
