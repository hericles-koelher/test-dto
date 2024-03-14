import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

/**
 * Módulo principal da aplicação.
 */
@Module({
  imports: [UsersModule],
})
export class AppModule {}
