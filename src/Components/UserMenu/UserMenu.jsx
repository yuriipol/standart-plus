import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Shared/Redux/auth/auth-selectors";
import { logOutOperation } from "../../Shared/Redux/auth/auth-operations";
import { Navigate } from "react-router-dom";
import useAuth from "../../Shared/hooks/useAuth";
import s from "./UserMenu.module.scss";

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOutOperation());
  };
  const { email } = useSelector(getUser);
  const isLogin = useAuth();
  if (!isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.containerLogOut}>
      <span className={s.userName}>{email}</span>
      <button onClick={onLogout} className={s.logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
