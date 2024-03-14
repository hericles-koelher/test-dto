import { PickType } from '@nestjs/swagger';
import { PublicUserDto } from './public_user.dto';
import { User } from 'src/users/users.schema';

/**
 * DTO de informações básicas de usuário público.
 */
export class PublicUserBasicInfoDto extends PickType(PublicUserDto, [
  'id',
  'name',
  'role',
] as const) {
  /**
   * Constrói uma nova instância de DTO de informações básicas de usuário público.
   *
   * @param id Identificador do usuário.
   * @param name Nome do usuário.
   * @param role Papel do usuário.
   */
  constructor(id: string, name: string, role: string) {
    super();

    this.id = id;
    this.name = name;
    this.role = role;
  }

  /**
   * Cria uma nova instância de DTO de informações básicas de usuário público a partir de uma entidade.
   *
   * @param user Entidade de usuário.
   * @returns Instância de DTO de informações básicas de usuário público.
   */
  static fromEntity(user: User): PublicUserBasicInfoDto {
    return new PublicUserBasicInfoDto(user.id, user.name, user.role);
  }
}
