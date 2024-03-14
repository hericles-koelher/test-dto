import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Exclude, plainToClass } from 'class-transformer';
import { IUser } from 'src/users/users.interface';
import { User } from 'src/users/users.schema';

/**
 * DTO de usuário público.
 */
export class PublicUserDto implements IUser {
  @Expose()
  @ApiProperty({ name: 'id', description: 'Identificador do usuário' })
  id: string;

  @Expose()
  @ApiProperty({ name: 'name', description: 'Nome do usuário' })
  name: string;

  @Expose()
  @ApiProperty({ name: 'email', description: 'Email do usuário' })
  email: string;

  @Expose()
  @ApiProperty({
    name: 'role',
    description: 'Papel do usuário',
    enum: ['admin', 'employee', 'customer'],
  })
  role: string;

  @Expose()
  @ApiProperty({
    name: 'createdAt',
    description: 'Data de criação do usuário',
  })
  createdAt: Date;

  @Expose()
  @ApiProperty({
    name: 'updatedAt',
    description: 'Data de atualização do usuário',
  })
  updatedAt: Date;

  @Exclude()
  password: string;

  /**
   * Constrói uma nova instância de DTO de usuário público.
   *
   * @param user Entidade de usuário.
   */
  constructor(user: IUser) {
    Object.assign(
      this,
      plainToClass(PublicUserDto, user, {
        excludeExtraneousValues: true,
      }),
    );
  }

  /**
   * Cria um novo DTO de usuário público a partir da entidade User.
   *
   * @param user Entidade de usuário.
   * @returns Um novo DTO de usuário público.
   */
  static fromEntity(user: User): PublicUserDto {
    return new PublicUserDto(user);
  }
}
