import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";

import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className="container">
      <h1 className={s.title}>"HOME PAGE"</h1>
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
