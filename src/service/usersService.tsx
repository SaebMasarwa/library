import axios, { AxiosResponse } from "axios";
import { User } from "../interfaces/User";
let api: string = process.env.REACT_APP_API + "/users";

export function getAllUsers() {
  return axios.get<UserRes>(api);
}
// add new users to db
export function addUser(newUser: User) {
  return axios.post<UserRes>(api, newUser);
}

export function getCustomerById(userId: string) {
  return axios.get<UserRes>(`${api}/${userId}`);
}

type UserRes = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export function loginUser(emailSubmitted: string, password: string) {
  //   const usersArray: Promise<AxiosResponse<any, any>> = getAllUsers();
  const usersArray: UserRes = getAllUsers();
  usersArray as unknown as Array<string>;
  usersArray.map((user: { email: string }) => user.email === emailSubmitted);
  return axios.get(`${api}/${email}`);
}
