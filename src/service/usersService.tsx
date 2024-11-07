import axios from "axios";
import { User } from "../interfaces/User";
let api: string = process.env.REACT_APP_API + "/users";

export function getAllUsers() {
  return axios.get<User[]>(api);
}
// add new users to db
export function addUser(newUser: User) {
  return axios.post<User>(api, newUser);
}

export function getCustomerById(userId: string) {
  return axios.get<User>(`${api}/${userId}`);
}

export async function loginUser(emailSubmitted: string, password: string) {
  const response = axios.get(
    `${api}/login?email=${emailSubmitted}&password=${password}`
  );
  console.log(response);

  // const response = await getAllUsers();
  // console.log(response);
  // const usersArray: User[] = response.data;
  // console.log(usersArray);

  // const user = usersArray.find(
  //   (user_1: { email: string; password: string }) =>
  //     user_1.email === emailSubmitted && user_1.password === password
  // );
  // if (user) {
  //   return axios.get(`${api}/${user.id}`);
  // } else {
  //   throw new Error("User not found");
  // }
}
