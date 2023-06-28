import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const login = async ({ email, password }) => {
  await signInWithEmailAndPassword(auth, email, password);
  const user = auth.currentUser;
  const userInfo = {
    id: user.uid,
    name: user.displayName,
    email: user.email,
  };
  return userInfo;
};

export const logout = async () => {
  await signOut(auth);
};
