import { useState } from "react";
import s from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "../Modal/Modal";
import Order from "../Order/Order";

const Header = ({ searchProducts }) => {
  const [cartOpen, setCartOpen] = useState(false);
  // console.log(cartOpen);

  const toggleModal = () => {
    setCartOpen(!cartOpen);
  };
  // console.log(searchProducts);
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
          {searchProducts.length > 0 ? (
            <ul>
              {searchProducts?.map((item) => (
                <Order key={item.id} item={item} />
              ))}
            </ul>
          ) : (
            <h2 className={s.pusto}>Товари відсутні</h2>
          )}
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
