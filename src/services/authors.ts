import { axiosInstance } from "../modules/axios";
import { Author } from "../domains/authors";
const path = "authors/";

export const fetchAuthors = async () => {
  const { data } = await axiosInstance.get<Author[]>(path);
  return data;
};
