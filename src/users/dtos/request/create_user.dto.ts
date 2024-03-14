import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO de criação de usuário.
 */
export class CreateUserDto {
  /**
   * O nome de criação do usuário.
   */
  @ApiProperty({ name: 'name', description: 'O nome de criação do usuário' })
  readonly name: string;

  /**
   * O email do usuário.
   */
  @ApiProperty({ name: 'email', description: 'O email do usuário' })
  readonly email: string;

  /**
   * A senha do usuário.
   */
  @ApiProperty({ name: 'password', description: 'A senha do usuário' })
  readonly password: string;

  /**
   * O papel do usuário.
   */
  @ApiProperty({
    name: 'role',
    description: 'O papel do usuário',
    enum: ['admin', 'employee', 'customer'],
  })
  readonly role: string;

  /**
   * Constrói uma nova instância de DTO de criação de usuário.
   *
   * @param name Nome do usuário
   * @param email Email do usuário
   * @param password Senha do usuário
   * @param role Papel do usuário
   */
  constructor(name: string, email: string, password: string, role: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
