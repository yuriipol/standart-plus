import { useNavigate } from "react-router-dom";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className={s.title}>Page NOT FOUND!</h1>
      <button type="button" className={s.goBack} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
