import { useState } from "react";
import TextField from "../TextField/TextField";
import s from "./AddProductForm.module.scss";

const AddProductForm = ({ onSubmit }) => {
  const categories = [
    "Виберіть категорію...",
    "товари для дому",
    "все для прибирання",
    "товари для рибалки",
  ];
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");

  const hendleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "link":
        setLink(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "country":
        setCountry(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      gallery: link,
      price: parseFloat(price),
      description,
      country,
    };
    // console.log(data);
    onSubmit(data);

    resetForm();
  };

  const resetForm = () => {
    setCategory("");
    setCountry("");
    setDescription("");
    setLink("");
    setName("");
    setPrice("");
  };

  const optionsCategories = categories.map((category, index) => {
    return (
      <option key={index} value={category}>
        {category}
      </option>
    );
  });

  return (
    <form onSubmit={hendleSubmit} className={s.form}>
      <div className={s.addForm}>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={s.select}
        >
          {optionsCategories}
        </select>
        <TextField
          value={name}
          onChange={hendleInputChange}
          label="Назва продукту"
          name="name"
          placeholder="введіть назву продукту"
          required={true}
          type="text"
        />
        <TextField
          value={link}
          onChange={hendleInputChange}
          label="фото продукту"
          name="link"
          placeholder="введіть ссилку"
          required={true}
          type="text"
        />
        <TextField
          value={price}
          onChange={hendleInputChange}
          label="Ціна продукту"
          name="price"
          placeholder="введіть ціну продукту"
          required={true}
          type="text"
        />
        <TextField
          value={description}
          onChange={hendleInputChange}
          label="Опис продукту"
          name="description"
          placeholder="введіть опис продукту"
          required={true}
          type="text"
        />
        <TextField
          value={country}
          onChange={hendleInputChange}
          label="Країна виробник"
          name="country"
          placeholder="введіть країну виробника"
          required={true}
          type="text"
        />
      </div>
      <button type="submit" className={s.add}>
        Додати товар
      </button>
    </form>
  );
};

export default AddProductForm;
