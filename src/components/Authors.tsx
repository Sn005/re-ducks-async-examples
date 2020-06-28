import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Author } from "../domains/authors";

export const Authors: FC<{
  authors: Author[];
}> = ({ authors, children }) => {
  return (
    <>
      <h2>Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.name}>
            <Link to={`/authors/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
