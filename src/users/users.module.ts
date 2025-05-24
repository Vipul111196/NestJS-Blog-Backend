import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])], // Importing TypeOrmModule to use the User entity
  // forwardRef is used to avoid circular dependency issues between AuthModule and UsersModule
  exports: [UsersService], // Exporting UsersService to be used in other modules
})
export class UsersModule {}
 