import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create_user.dto';

/**
 * DTO de atualização de usuário.
 */
export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password'] as const),
) {}
