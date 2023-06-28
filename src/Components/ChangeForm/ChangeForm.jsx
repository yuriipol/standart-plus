import { useState } from "react";
import TextField from "../TextField/TextField";
// import { fields } from "../TextField/fields";
import s from "./ChangeForm.module.scss";

const ChangeForm = ({ onSubmit, id, toggleModal }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

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
      default:
        return;
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name,
      gallery: link,
      price: parseFloat(price),
      description,
    };
    // console.log(id, product);
    onSubmit(id, product);

    resetForm();
    toggleModal();
  };

  const resetForm = () => {
    setName("");
    setLink("");
    setDescription("");
    setPrice("");
  };
  return (
    <div>
      <form onSubmit={hendleSubmit} className={s.ChangeForm}>
        <div className={s.form}>
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
        </div>
        <button type="submit" className={s.login}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangeForm;
