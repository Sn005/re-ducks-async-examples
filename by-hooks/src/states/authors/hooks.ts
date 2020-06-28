import { useState, useCallback, Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AxiosError } from "axios";

import { getAllAuthors, getAuthorById, getIsExistAuthors } from "./selectors";
import { addAuthors, AuthorsActions } from "./actions";
import { fetchAuthors } from "../../services/authors";

export const useAuthors = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const dispatch = useDispatch<Dispatch<AuthorsActions>>();
  const getAuthors = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedAuthors = await fetchAuthors();
      setIsLoading(false);
      dispatch(addAuthors({ authors: fetchedAuthors }));
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  }, [dispatch]);

  return {
    authors: useSelector(getAllAuthors),
    isLoading,
    error,
    getAuthors,
    getAuthorById: useSelector(getAuthorById),
    isExistAuthors: useSelector(getIsExistAuthors),
  };
};
