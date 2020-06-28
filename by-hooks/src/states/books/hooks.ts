import { useState, useCallback, Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AxiosError } from "axios";

import { getAllBooks } from "./selectors";
import { addBooks, BooskActions } from "./actions";
import { fetchBooksByAuthorId } from "../../services/books";

export const useBooks = (authorId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const books = useSelector(getAllBooks);
  const dispatch = useDispatch<Dispatch<BooskActions>>();
  const getBooks = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedBooks = await fetchBooksByAuthorId(authorId);
      setIsLoading(false);
      dispatch(addBooks({ books: fetchedBooks }));
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  }, [authorId, dispatch]);
  return {
    books,
    isLoading,
    error,
    getBooks,
  };
};
