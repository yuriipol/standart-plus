import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";
import { products } from "../../Shared/Servises/products";

import s from "./HomePage.module.scss";

const HomePage = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [tovar, setTovar] = useState([]);

  const addInputdata = (products) => {
    const data = JSON.parse(products);
    for (const item of data) {
      item.id = nanoid();
    }
    setTovar(data);
  };
  useEffect(() => {
    addInputdata(products);
  }, []);
  // console.log(tovar);

  const findIdProduct = (event) => {
    const findInfo = tovar.find((item) => item.id === event.currentTarget.id);
    setSearchProducts((prevstate) => [...findInfo]);
    console.log(searchProducts);
    // if (event.target.tagName !== "BUTTON") {
    //   toggleModal();
    // }
  };

  return (
    <div className="container">
      <h1 className={s.title}>"HOME PAGE"</h1>
      <Header />
      <Products data={tovar} findIdProduct={findIdProduct} />
      <Footer />
    </div>
  );
};

export default HomePage;
