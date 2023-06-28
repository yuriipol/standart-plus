import { useSelector } from "react-redux";
import { isLogin } from "../Redux/auth/auth-selectors";

const useAuth = () => {
  const isAuth = useSelector(isLogin);
  return isAuth;
};
export default useAuth;
