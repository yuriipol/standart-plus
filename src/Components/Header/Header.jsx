import s from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div>
        <span className={s.logo}>Standart +</span>

        <ul className={s.nav}>
          <li className={s.nav_item}>Про нас</li>
          <li className={s.nav_item}>Контакти</li>
          <li className={s.nav_item}>Кабінет</li>
        </ul>
        <FaShoppingCart className={s.shoppingCartButton} />
      </div>
      <div className={s.baner}></div>
    </header>
  );
};

export default Header;
