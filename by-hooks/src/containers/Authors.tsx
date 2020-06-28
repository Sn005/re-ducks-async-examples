import React, { FC, useEffect } from "react";
import { Authors as AuthorsComponents } from "../components/Authors";
import { useAuthors } from "../states/authors";

export const Authors: FC = () => {
  const { isLoading, getAuthors, authors } = useAuthors();
  useEffect(() => {
    getAuthors();
  }, [getAuthors]);
  if (isLoading) return <div>loading...</div>;
  return <AuthorsComponents authors={authors} />;
};
