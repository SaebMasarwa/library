import { FunctionComponent, useEffect, useState } from "react";
import { getAllBooks } from "../service/booksService";
import { Book } from "../interfaces/Book";

interface BooksTableProps {}

const BooksTable: FunctionComponent<BooksTableProps> = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getAllBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <>
      <table className="table">
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
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>{item.genres}</td>
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
