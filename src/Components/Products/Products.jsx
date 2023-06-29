import { nanoid } from "nanoid";
import s from "./Products.module.scss";
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";

const Products = ({ data, findIdProduct, onClickLoadVore }) => {
  const [isShow, setIsShow] = useState(false);
  const [searchInfo, setSearchInfo] = useState({});
  // console.log(searchInfo);
  const toggleModal = () => {
    setIsShow(!isShow);
    // console.log(isShow);
  };
  const findDetails = (event) => {
    const findInfo = data.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(findInfo);
  };

  const productItem = data?.map(
    ({ id, gallery, name, country, price, category }) => (
      <li className={s.productItem} key={nanoid()} id={id}>
        <div onClick={toggleModal}>
          <img
            className={s.image}
            src={gallery}
            alt={name}
            id={id}
            onClick={findDetails}
          />
        </div>
        <h2 className={s.name}>{name}</h2>
        <h3 className={s.country}>{country}</h3>
        <h3 className={s.country}>{category}</h3>
        <b className={s.price}>Ціна: {price} грн.</b>
        <div className={s.add_to_card} onClick={findIdProduct} id={id}>
          +
        </div>
      </li>
    )
  );
  const { id, gallery, name, country, description, price } = searchInfo;
  return (
    <main>
      <ul className={s.products}>{productItem}</ul>
      <button type="button" className={s.loadMore} onClick={onClickLoadVore}>
        Load more
      </button>
      {isShow && (
        <Modal onClose={toggleModal}>
          <h2 className={s.titleModalDetails}>Детальна інформація</h2>
          <img className={s.imageDetails} src={gallery} alt={name} />
          <h2 className={s.name}>{name}</h2>
          <h3 className={s.country}>{country}</h3>
          <p className={s.description}>{description}</p>
          <b className={s.price}>Ціна: {price} грн.</b>
          <div className={s.add_to_card} onClick={findIdProduct} id={id}>
            +
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Products;
