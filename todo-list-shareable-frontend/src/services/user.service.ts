import http from "./http.client"
import type { User } from "@/models/User";

export class UserService {
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    const res = await http.post<User>("/RegisterUser/Post", {
      name: name,
      email: email,
      password: password,
    });
    return res.data;
  }

  async login(
      email: string,
      password: string
  ): Promise<User> {
    const res = await http.post<User>("/Login/post", {
      email: email,
      password: password,
    });
    return res.data
  }

  async getAll(): Promise<User[]> {
    const res = await http.get<User[]>("/User")
    return res.data
  }

  async getOneUser(id: number): Promise<User> {
    const res = await http.get<User>("/users/" + id);
    return res.data;
  }
}
