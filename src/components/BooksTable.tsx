import { FunctionComponent, useEffect, useState } from "react";
import { getAllBooks } from "../service/booksService";
import { Book } from "../interfaces/Book";

interface BooksTableProps {
  isNewContent: boolean;
  setIsNewContent: Function;
}

const BooksTable: FunctionComponent<BooksTableProps> = ({
  isNewContent,
  setIsNewContent,
}) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setIsNewContent(false);
    getAllBooks().then((response) => {
      setBooks(response.data);
    });
  }, [isNewContent]);

  return (
    <>
      <table className="table w-50">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Genres</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.bookName}</td>
              <td>{item.author}</td>
              <td>{item.genre}</td>
              <td>{item.price}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksTable;
