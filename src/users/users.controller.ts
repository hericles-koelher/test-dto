import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { PublicUserDto } from './dtos/response/public_user.dto';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/request/create_user.dto';
import { UpdateUserDto } from './dtos/request/update_user.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FastifyReply } from 'fastify';
import { PublicUserBasicInfoDto } from './dtos/response/public_user_basic_info.dto';

/**
 * Controller responsavel por gerenciar as rotas de usuarios
 */
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Obtem todos os usuarios
   *
   * @returns Promise contendo um array com os usuários.
   */
  @ApiResponse({
    status: HttpStatus.OK,
    type: [PublicUserBasicInfoDto],
    description: 'Array de usuários encontrados',
  })
  @Get()
  async getUsers(): Promise<PublicUserBasicInfoDto[]> {
    return this.usersService.getUsers();
  }

  /**
   * Obtem o usuário antigo.
   *
   * @param id Id do usuário requisitado.
   * @param response Objeto de resposta do Fastify
   */
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: PublicUserDto,
    description: 'Usuário encontrado',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuário não encontrado',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          description: 'Mensagem de erro',
        },
      },
    },
  })
  @Get('/:id')
  async getUser(@Param('id') id: string, @Res() response: FastifyReply) {
    const user = await this.usersService.getUser(id);

    if (!user) {
      response
        .status(HttpStatus.NOT_FOUND)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ message: 'User not found' });
    } else {
      response.status(HttpStatus.OK).send(user);
    }
  }

  /**
   * Cria um usuário do sistema.
   *
   * @param dto dados do usuário a ser criado.
   * @returns usuário criado.
   */
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PublicUserDto,
    description: 'Usuário criado',
  })
  @Post()
  @HttpCode(201)
  async createUser(@Body() dto: CreateUserDto): Promise<PublicUserDto> {
    return this.usersService.createUser(dto);
  }

  /**
   * Atualiza um usuário do sistema.
   *
   * @param id Id do usuário a ser atualizado.
   * @param dto dados do usuário a ser atualizado.
   * @returns informações do usuário atualizado.
   */
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: PublicUserDto,
    description: 'Usuário atualizado',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuário não encontrado',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          description: 'Mensagem de erro',
        },
      },
    },
  })
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
    @Res() response: FastifyReply,
  ) {
    const user = await this.usersService.updateUser(id, dto);

    if (!user) {
      response
        .status(HttpStatus.NOT_FOUND)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ message: 'User not found' });
    } else {
      response.status(HttpStatus.OK).send(user);
    }
  }

  /**
   * Deleta um usuário do sistema.
   *
   * @param id Id do usuário a ser deletado.
   */
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Usuário deletado',
  })
  @HttpCode(204)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.usersService.deleteUser(id);
  }
}
