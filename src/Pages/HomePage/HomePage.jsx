import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";
import Categories from "../../Components/Categories/Categories";
import { products } from "../../Shared/Servises/products";

import s from "./HomePage.module.scss";

const HomePage = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [tovar, setTovar] = useState([]);
  const [filteredByCategories, setfilteredByCategories] = useState([]);
  // console.log(filteredByCategories);

  const addInputdata = (products) => {
    const data = JSON.parse(products);
    for (const item of data) {
      item.id = nanoid();
    }
    setTovar(data);
    setfilteredByCategories(data);
  };
  useEffect(() => {
    addInputdata(products);
  }, []);

  const findIdProduct = (event) => {
    const findProduct = tovar.find(
      (item) => item.id === event.currentTarget.id
    );
    const dublicate = searchProducts.find(
      (element) => element.id === findProduct.id
    );

    if (!dublicate) {
      setSearchProducts([...searchProducts, findProduct]);
    }
  };
  const deleteOrder = (id) => {
    const delProduct = searchProducts.filter((item) => item.id !== id);
    setSearchProducts(delProduct);
  };
  const chooseCategory = (category) => {
    const filteredList = tovar.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    setfilteredByCategories(filteredList);
    if (category === "все") {
      setfilteredByCategories(tovar);
    }
    // console.log(category);
  };

  return (
    <div className="container">
      <h1 className={s.title}>"HOME PAGE"</h1>
      <Header searchProducts={searchProducts} deleteOrder={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Products data={filteredByCategories} findIdProduct={findIdProduct} />
      <Footer />
    </div>
  );
};

export default HomePage;
