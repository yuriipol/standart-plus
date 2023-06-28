import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import s from "./Header.module.scss";
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import Modal from "../Modal/Modal";
import Order from "../Order/Order";

const Header = ({ searchProducts, deleteOrder }) => {
  let sum = 0;
  searchProducts.forEach((el) => (sum += Number.parseFloat(el.price)));

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
        <li className={s.nav_item}>
          <NavLink to="login">Кабінет</NavLink>
          <Outlet />
        </li>
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
          <div className={s.modalContent}>
            <h2 className={s.title}>КОРЗИНА</h2>

            {searchProducts.length > 0 ? (
              <ul>
                {searchProducts?.map((item) => (
                  <Order key={item.id} item={item} deleteOrder={deleteOrder} />
                ))}
                <p className={s.sum}>Загальна сума: {sum.toFixed(2)} грн.</p>
              </ul>
            ) : (
              <h2 className={s.pusto}>Товари відсутні</h2>
            )}
            <FaWindowClose onClick={toggleModal} className={s.modal__close} />
          </div>
        </Modal>
      )}
    </header>
  );
};

export default Header;
