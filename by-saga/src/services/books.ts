import { axiosInstance } from "../modules/axios";
import { Book } from "../domains/books";
const path = "books/";

export const fetchBooksByAuthorId = async (authorId: number) => {
  const { data } = await axiosInstance.get<Book[]>(path, {
    params: {
      authorId,
    },
  });
  return data;
};
