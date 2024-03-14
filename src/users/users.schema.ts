import { IUser } from './users.interface';

/**
 * Classe de usuário.
 */
export class User implements IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;

  /**
   * Constroi uma nova instância de usuário.
   *
   * @param id identificador do usuário.
   * @param name nome do usuário.
   * @param email email do usuário.
   * @param password senha do usuário.
   * @param role papel do usuário.
   */
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }
}
