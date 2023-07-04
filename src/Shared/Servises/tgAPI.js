import axios from "axios";

const TOKEN = "6328334929:AAFnTNkFH-4f4PK1eiwtxaUAhNIFSbHLa5Y";
// const CHAT_ID = "-1001908786125";

const instance = axios.create({
  baseURL: `https://api.telegram.org/bot${TOKEN}/`,
});

export const sendMassege = async (message) => {
  const { data } = await instance.post("sendMessage", {
    parse_mode: "html",
    chat_id: "-1001969070378",
    text: message,
  });
  console.log(data);
  return data;
};
