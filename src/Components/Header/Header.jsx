import { useState } from "react";
import s from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "../Modal/Modal";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  console.log(cartOpen);
  const toggleModal = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <header>
      <span className={s.logo}>Standart +</span>

      <ul className={s.nav}>
        <li className={s.nav_item}>Про нас</li>
        <li className={s.nav_item}>Контакти</li>
        <li className={s.nav_item}>Кабінет</li>
      </ul>
      <FaShoppingCart
        className={
          cartOpen
            ? `${s.shoppingCartButton} ${s.active}`
            : s.shoppingCartButton
        }
        onClick={toggleModal}
      />
      <div className={s.baner}></div>
      {cartOpen && (
        <Modal onClose={toggleModal}>
          <h2>КОРЗИНА</h2>
          <button
            type="button"
            onClick={toggleModal}
            className={s.modal__close}
          >
            close
          </button>
        </Modal>
      )}
    </header>
  );
};

export default Header;
