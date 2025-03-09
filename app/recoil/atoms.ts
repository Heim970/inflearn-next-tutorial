import { atom } from "recoil";

export const userState = atom<{
  name: string;
  email: string;
}>({
  key: "userState",
  default: {
    email: "",
    name: "",
  },
});
