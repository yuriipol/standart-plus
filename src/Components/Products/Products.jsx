import s from "./Products.module.scss";

const Products = ({ data, findIdProduct }) => {
  //   console.log(data);

  const productItem = data?.map(
    ({ id, gallery, name, country, description, price }) => (
      <li className={s.productItem} key={id} id={id}>
        <img className={s.image} src={gallery[0]} alt={name} />
        <h2 className={s.name}>{name}</h2>
        <h3 className={s.country}>{country}</h3>
        <b className={s.price}>Ціна: {price} грн.</b>
        <p className={s.discription}>{description}</p>
        <div className={s.add_to_card} onClick={findIdProduct} id={id}>
          +
        </div>
      </li>
    )
  );

  return (
    <main>
      <ul className={s.products}>{productItem}</ul>
    </main>
  );
};

export default Products;
