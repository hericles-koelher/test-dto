/**
 * Usuário do sistema.
 */
export interface IUser {
  /**
   * Identificador do usuário.
   */
  id: string;

  /**
   * Nome do usuário.
   */
  name: string;

  /**
   * E-mail do usuário.
   */
  email: string;

  /**
   * Senha do usuário.
   */
  password: string;

  /**
   * Papel do usuário.
   */
  role: string;

  /**
   * Data de criação do usuário.
   */
  createdAt: Date;

  /**
   * Data de atualização do usuário.
   */
  updatedAt: Date;
}
