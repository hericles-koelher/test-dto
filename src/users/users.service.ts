import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/request/create_user.dto';
import { PublicUserDto } from './dtos/response/public_user.dto';
import { User } from './users.schema';
import { UpdateUserDto } from './dtos/request/update_user.dto';
import { PublicUserBasicInfoDto } from './dtos/response/public_user_basic_info.dto';

/**
 * Serviço responsável por gerenciar os usuários.
 */
@Injectable()
export class UsersService {
  /**
   * Lista de usuários cadastrados.
   */
  private users: User[] = [];

  /**
   * Cria um novo usuário.
   *
   * @param dto informações do usuário a ser criado.
   * @returns informações publicas do usuário criado.
   */
  async createUser(dto: CreateUserDto): Promise<PublicUserDto> {
    // generates a new uuid for the user
    const id = Math.random().toString(36).substring(7);

    const user = new User(id, dto.name, dto.email, dto.password, dto.role);

    this.users.push(user);

    // artificial delay to simulate a database request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return PublicUserDto.fromEntity(user);
  }

  /**
   * Retorna a lista de usuários cadastrados.
   *
   * @returns lista de usuários cadastrados.
   */
  async getUsers(): Promise<PublicUserBasicInfoDto[]> {
    // artificial delay to simulate a database request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return this.users.map((user) => PublicUserBasicInfoDto.fromEntity(user));
  }

  /**
   * Retorna as informações de um usuário.
   *
   * @param id identificador do usuário.
   * @returns informações publicas do usuário caso ele exista, ou null caso contrário.
   */
  async getUser(id: string): Promise<PublicUserDto | null> {
    // artificial delay to simulate a database request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    return PublicUserDto.fromEntity(user);
  }

  /**
   * Atualiza as informações de um usuário.
   *
   * @param id identificador do usuário.
   * @param dto informações do usuário a serem atualizadas.
   * @returns informações publicas do usuário atualizadas caso ele exista, ou null caso contrário.
   */
  async updateUser(
    id: string,
    dto: UpdateUserDto,
  ): Promise<PublicUserDto | null> {
    // artificial delay to simulate a database request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    user.name = dto.name ?? user.name;
    user.email = dto.email ?? user.email;
    user.role = dto.role ?? user.role;
    user.updatedAt = new Date();

    return PublicUserDto.fromEntity(user);
  }

  /**
   * Deleta um usuário.
   *
   * @param id identificador do usuário.
   */
  async deleteUser(id: string): Promise<void> {
    // artificial delay to simulate a database request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.users = this.users.filter((user) => user.id !== id);
  }
}
