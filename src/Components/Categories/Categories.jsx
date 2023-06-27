import s from "./Categories.module.scss";

const Categories = ({ chooseCategory }) => {
  const categories = [
    {
      key: "all",
      name: "всі",
    },
    {
      key: "household goods",
      name: "товари для дому",
    },
    {
      key: "everything for cleaning",
      name: "все для прибирання",
    },
    {
      key: "fishing goods",
      name: "товари для рибалки",
    },
  ];
  return (
    <div className={s.categories}>
      {categories.map((item) => (
        <div
          key={item.key}
          className={s.categoriesItem}
          onClick={() => chooseCategory(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
