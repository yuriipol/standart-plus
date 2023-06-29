import { nanoid } from "nanoid";
import UserMenu from "../../Components/UserMenu/UserMenu";
import s from "./ProductsPage.module.scss";
import Modal from "../../Components/Modal/Modal";
import {
  getProducts,
  changeProduct,
  addProduct,
  delProduct,
} from "../../Shared/Servises/api";
import { useState, useEffect } from "react";
import ChangeForm from "../../Components/ChangeForm/ChangeForm";
import AddProductForm from "../../Components/AddProductForm/AddProductForm";

const ProductsPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInfo, setSearchInfo] = useState({});
  const [findProduct, setFindProduct] = useState(false);
  console.log(data);

  useEffect(() => {
    const productsItems = async () => {
      const data = await getProducts(page);

      setData((prevstate) => [...prevstate, ...data]);
    };
    productsItems();
  }, [page]);

  const toggleModal = () => {
    setIsShow(!isShow);
    // console.log(isShow);
  };
  const findDetails = (event) => {
    const findInfo = data.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(findInfo);
  };
  const onSubmit = (id, product) => {
    changeProduct(id, product);

    setFindProduct(true);
  };
  const addToProducts = (product) => {
    addProduct(product);
    console.log(product);
    setFindProduct(true);
  };
  const deleteProduct = (id) => {
    delProduct(id);
    setFindProduct(true);
    // console.log(id);
  };

  const onClickLoadVore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const productItem = data?.map(({ id, gallery, name, country, price }) => (
    <li className={s.productItem} key={nanoid()} id={id} onClick={findDetails}>
      <div onClick={toggleModal} className={s.container}>
        <img className={s.image} src={gallery} alt={name} id={id} />
        <h2 className={s.name}>{name}</h2>
        <h3 className={s.country}>{country}</h3>
        <b className={s.price}>Ціна: {price} грн.</b>
      </div>
      <button
        type="button"
        className={s.deleteProduct}
        onClick={() => deleteProduct(id)}
      >
        delete
      </button>
    </li>
  ));
  const { id, gallery, name, price } = searchInfo;

  return (
    <>
      <div className={s.header}>
        <h1>Products Page</h1>;
        <UserMenu />
      </div>
      <AddProductForm onSubmit={addToProducts} />
      <ul className={s.products}>{productItem}</ul>
      <button type="button" className={s.loadMore} onClick={onClickLoadVore}>
        Load more
      </button>
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
