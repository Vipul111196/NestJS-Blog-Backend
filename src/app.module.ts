import { TypeOrmModule } from '@nestjs/typeorm'
import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//  User Created Module

import { UsersModule } from 'src/users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

// User Created Entity
import { User } from './users/user.entity';

@Module({  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 1025,
        username: 'postgres',
        password: 'vipultyagi',
        database: 'nestjs-blog',
        entities: [User],
        synchronize: true, // Set to false in production
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
