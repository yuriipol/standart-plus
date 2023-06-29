import axios from "axios";

const instance = axios.create({
  baseURL: "https://64378c75894c9029e8c02c43.mockapi.io/api-tweets/",
  params: {
    page: 1,
    limit: 10,
  },
});

export const getProducts = async (page) => {
  const { data } = await instance.get(`products`, {
    params: {
      page: page,
    },
  });

  return data;
};
export const changeProduct = async (id, product) => {
  const { data } = await instance.put(`products/${id}`, product);
  // console.log(data);
  return data;
};

export const addProduct = async (product) => {
  const { data } = await instance.post(`products`, product);
  // console.log(data);
  return data;
};
