import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Authors as AuthorsComponents } from "../components/Authors";
import { fetchAuthors, getAllAuthors, getIsLoading } from "../states/authors";

export const Authors: FC = () => {
  const authors = useSelector(getAllAuthors);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthors.start());
  }, [dispatch]);
  if (isLoading) return <div>loading...</div>;
  return <AuthorsComponents authors={authors} />;
};
