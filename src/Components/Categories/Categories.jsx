import s from "./Categories.module.scss";

const Categories = ({ chooseCategory }) => {
  const categories = [
    {
      key: "all",
      name: "все",
    },
    {
      key: "slippers",
      name: "шлепанцы",
    },
    {
      key: "boots",
      name: "ботинки",
    },
    {
      key: "sneakers",
      name: "кроссовки",
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
