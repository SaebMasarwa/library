import axios from "axios";
import { Book } from "../interfaces/Book";
let api: string = process.env.REACT_APP_API + "/books";

export function getAllBooks() {
  return axios.get<Book[]>(api);
}

export function addBook(book: Book) {
  return axios.post<Book[]>(api, book);
}

export function getCustomerById(userId: string) {
  return axios.get<Book>(`${api}/${userId}`);
}
