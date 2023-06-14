import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className="container">
      <h1 className={s.title}>"HOME PAGE"</h1>
      <Header />
      <Footer />
    </div>
  );
};

export default HomePage;
