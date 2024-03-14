import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.schema';

/**
 * DTO de usuário público.
 */
export class PublicUserDto {
  /**
   * O identificador do usuário.
   */
  @ApiProperty({ name: 'id', description: 'Identificador do usuário' })
  id: string;

  /**
   * O nome do usuário.
   */
  @ApiProperty({ name: 'name', description: 'Nome do usuário' })
  name: string;

  /**
   * O email do usuário.
   */
  @ApiProperty({ name: 'email', description: 'Email do usuário' })
  email: string;

  /**
   * O papel do usuário.
   */
  @ApiProperty({
    name: 'role',
    description: 'Papel do usuário',
    enum: ['admin', 'employee', 'customer'],
  })
  role: string;

  /**
   * A data de criação do usuário.
   */
  @ApiProperty({
    name: 'createdAt',
    description: 'Data de criação do usuário',
  })
  createdAt: Date;

  /**
   * A data de atualização do usuário.
   */
  @ApiProperty({
    name: 'updatedAt',
    description: 'Data de atualização do usuário',
  })
  updatedAt: Date;

  /**
   * Constrói uma nova instância de DTO de usuário público.
   *
   * @param id Identificador do usuário.
   * @param name Nome do usuário.
   * @param email Email do usuário.
   * @param role Papel do usuário.
   * @param createdAt Data de criação do usuário.
   * @param updatedAt Data de atualização do usuário.
   */
  constructor(
    id: string,
    name: string,
    email: string,
    role: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  /**
   * Cria um novo DTO de usuário público a partir da entidade User.
   *
   * @param user Entidade de usuário.
   * @returns Um novo DTO de usuário público.
   */
  static fromEntity(user: User): PublicUserDto {
    return new PublicUserDto(
      user.id,
      user.name,
      user.email,
      user.role,
      user.createdAt,
      user.updatedAt,
    );
  }
}
