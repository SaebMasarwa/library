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
  const response = await getAllUsers();
  const usersArray: User[] = response.data;

  const user = usersArray.find(
    (userRes: { email: string; password: string }) =>
      userRes.email === emailSubmitted && userRes.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedIn", JSON.stringify(user));
    return axios.get(`${api}/${user.id}`);
  } else {
    throw new Error("User not found");
  }
}
