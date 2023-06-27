import s from "./Order.module.scss";
import { FaTrash } from "react-icons/fa";

const Order = ({ item, deleteOrder }) => {
  // console.log(item.gallery[0]);
  return (
    <li className={s.productItem} id={item.id}>
      <img className={s.image} src={item.gallery} alt={item.name} />
      <h2 className={s.name}>{item.name}</h2>
      <b className={s.price}>Ціна: {item.price} грн.</b>
      <FaTrash className={s.del} onClick={() => deleteOrder(item.id)} />
    </li>
  );
};

export default Order;
