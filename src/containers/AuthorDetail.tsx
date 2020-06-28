import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchBooks,
  getIsLoading as getIsBooksLoading,
  getAllBooks,
} from "../states/books";

import {
  fetchAuthors,
  getAuthorById,
  getIsLoading as getIsAuthorsLoading,
  getIsExistAuthors,
} from "../states/authors";

import { AuthorDetail as AuthorDetailComponent } from "../components/AuthorDetail";
import { Author } from "../domains/authors";

export const AuthorDetail: FC = () => {
  const [author, setAuthor] = useState<Author>();
  const { authorId } = useParams();
  const books = useSelector(getAllBooks);
  const isExistAuthors = useSelector(getIsExistAuthors);
  const isBooksLoading = useSelector(getIsBooksLoading);
  const isAuthorsLoading = useSelector(getIsAuthorsLoading);
  const getAuthor = useSelector(getAuthorById);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isExistAuthors) dispatch(fetchAuthors.start());
    dispatch(fetchBooks.start({ authorId: Number(authorId) }));
    setAuthor(getAuthor(Number(authorId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [author, authorId, isExistAuthors, dispatch]);
  if (isBooksLoading || isAuthorsLoading || !author)
    return <div>loading...</div>;
  return <AuthorDetailComponent authorName={author.name} books={books} />;
};
