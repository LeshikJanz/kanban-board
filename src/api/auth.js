import { request } from "./base"
import { User } from "types/user"

export const register = (user: User) =>
  request
    .post(`accounts`, user)
    .then((user: User) => user)

export const login = (user: User) =>
  request
    .post(`accounts/login`, user)
    .then((user: User) => user)


export const logout = (user: User) =>
  request
    .post(`accounts/logout?access_token=${localStorage.getItem("Token")}`, {})
    .then(() => "Success")
    .catch(() => 'Logged out')
