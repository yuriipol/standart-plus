import s from "./Order.module.scss";

const Order = ({ item }) => {
  // console.log(item.gallery[0]);
  return (
    <li className={s.productItem} id={item.id}>
      <img className={s.image} src={item.gallery[0]} alt={item.name} />
      <h2 className={s.name}>{item.name}</h2>
      <b className={s.price}>Ціна: {item.price} грн.</b>
    </li>
  );
};

export default Order;
