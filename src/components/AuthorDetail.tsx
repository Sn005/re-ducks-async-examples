import React, { FC } from "react";
import { Book } from "../domains/books";

export const AuthorDetail: FC<{
  authorName: string;
  books: Book[];
}> = ({ authorName, books }) => {
  return (
    <div>
      <h2>{authorName} books</h2>

      {books.map((book) => (
        <div key={book.title}>{book.title}</div>
      ))}
    </div>
  );
};
