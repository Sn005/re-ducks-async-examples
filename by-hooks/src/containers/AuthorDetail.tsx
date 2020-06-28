import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AuthorDetail as AuthorDetailComponent } from "../components/AuthorDetail";
import { useBooks } from "../states/books";
import { useAuthors } from "../states/authors";
import { Author } from "../domains/authors";

export const AuthorDetail: FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const authorId = query.get("author-id");
  const {
    isExistAuthors,
    isLoading: isAuthorsLoading,
    getAuthors,
    getAuthorById,
  } = useAuthors();
  const { isLoading: isBooksLoading, getBooks, books } = useBooks(
    Number(authorId)
  );
  const [author, setAuthor] = useState<Author>();
  useEffect(() => {
    if (!isExistAuthors) getAuthors();
    setAuthor(getAuthorById(Number(authorId)));
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorId, isExistAuthors, getBooks, getAuthors]);
  if (isBooksLoading || isAuthorsLoading || !author)
    return <div>loading...</div>;
  return <AuthorDetailComponent authorName={author.name} books={books} />;
};
