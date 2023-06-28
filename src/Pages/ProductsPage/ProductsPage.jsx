import UserMenu from "../../Components/UserMenu/UserMenu";
import s from "./ProductsPage.module.scss";
import Modal from "../../Components/Modal/Modal";
import { getProducts, changeProduct } from "../../Shared/Servises/api";
import { useState, useEffect } from "react";
import ChangeForm from "../../Components/ChangeForm/ChangeForm";

const ProductsPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInfo, setSearchInfo] = useState({});
  const [findProduct, setFindProduct] = useState(null);
  // console.log(findProduct);

  useEffect(() => {
    const productsItems = async () => {
      const data = await getProducts(page);
      setData(data);
      setFindProduct(false);
    };
    productsItems();
  }, [page, findProduct]);

  const toggleModal = () => {
    setIsShow(!isShow);
    // console.log(isShow);
  };
  const findDetails = (event) => {
    const findInfo = data.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(findInfo);
  };
  const onSubmit = (id, product) => {
    // setFindProduct(true);
    changeProduct(id, product);
    // console.log(id, product);
    // const data = getProducts(page);
    // setData(data);

    setFindProduct(true);
    // console.log(findProduct);
  };

  const productItem = data?.map(({ id, gallery, name, country, price }) => (
    <li className={s.productItem} key={id} id={id} onClick={findDetails}>
      <div onClick={toggleModal} className={s.container}>
        <img className={s.image} src={gallery} alt={name} id={id} />
        <h2 className={s.name}>{name}</h2>
        <h3 className={s.country}>{country}</h3>
        <b className={s.price}>Ціна: {price} грн.</b>
      </div>
    </li>
  ));
  const { id, gallery, name, price } = searchInfo;

  return (
    <>
      <div className={s.header}>
        <h1>Products Page</h1>;
        <UserMenu />
      </div>
      <ul className={s.products}>{productItem}</ul>
      {isShow && (
        <Modal onClose={toggleModal}>
          <div className={s.modal}>
            <img className={s.imageDetails} src={gallery} alt={name} />
            <p className={s.nameModal}>{name}</p>
            <p className={s.priceModal}>Ціна: {price} грн.</p>
          </div>
          <ChangeForm onSubmit={onSubmit} id={id} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ProductsPage;
