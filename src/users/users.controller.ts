
// //  There are multiple chapters in this file, each chapter is separated by a comment. (***************************************************)

// // List of chapters:
// // Chapter - 1 Controllers
// // Chapter - 2 Controllers with Pipes
// // Chapter - 3 Controllers with Pipes and Services

// //  (***************************************************)

// //  Chatper - 1 Controllers

// import {
//   Controller,
//   Get,
//   Patch,
//   Post,
//   Put,
//   Delete,
//   Param,
//   Query,
//   Body,
//   Req
// } from '@nestjs/common';

// @Controller('users')
// export class UsersController {
//   // This is a placeholder for the UsersController class.
//   // You can add your methods and logic here as needed.
//   // For example, you might want to add methods for handling user-related requests.
//   // Example:
//   // @Get()
//   // getAllUsers() {
//   //   return 'This action returns all users';
//   // }

//   //  Example of a method that returns all users
//   // @Get()
//   // public getAllUsers() {
//   //     return 'This action returns all users ids';
//   // }

// // Example of a method where a parameter is mandatory
// @Get('/:id') // /: this defines a parameter
// public getAllUsers() {
//   return `This action returns all users with ID: `;
// }

// // Example of a method where a parameter is optional
// @Get('{/:id}')
// public getAllUsers() {
//   return `This action returns all users with ID: `;
// }

// // Example of a method that grabs a user by ID from params
// @Get('/:id')
// public getUserById(@Param() params: any) {
//   console.log(params);
//   return `This action returns a user with ID: `;
// }

// // Example of a method that grabs where multiple parameters are passed one mandatory and one optional
// @Get('/:id{/:name}')
// public getUserById(@Param() params: any) {
//   console.log(params);
//   return `This action returns a user with ID: `;
// }

// // Example of a method that grabs where both pararmeter and a query are passed
// @Get('/:id{/:name}')
// public getUserById(@Param() params: any, @Query() query: any) {
//   console.log(params);
//   console.log(query);
//   return `This action returns a user with ID: `;
// }

// // Example of a method that grabs specific param and specific query where both pararmeter and a query are passed
// @Get('/:id{/:name}')
// public getUserById(
//   @Param('id') id: any,
//   @Param('name') name: any,
//   @Query('limit') limit: any,
// ) {
//   console.log(id);
//   console.log(name);
//   console.log(limit);
//   return `This action returns a user with ID: ${id}, name: ${name} and limit: ${limit}`;
// }

// // Example of a method that is used to create a new user using the POST method
// @Post()
// public createUser() {
//   return 'This action creates a new user';
// }

// // Example of a method that is used to create a new user using the POST method by grabbing the body content of the request
// @Post()
// public createUser(@Body() body: any) {
//   console.log(body);
//   return 'This action creates a new user';
// }

// // Example of a method that is used to create a new user using the POST method by grabbing the specific body content of the request
// @Post()
// public createUser(@Body('name') name: string, @Body('email') email: string) {
//   console.log(name);
//   return `This action creates a new user with name: ${name} and email: ${email}`;
// }

// // Example of a method that is used to create a new user using the POST method by grabbing the body content of the request
//   @Post()
//     public createUser(@Req() body: Request) {
//         console.log(body);
//         return 'This action creates a new user';
//     }

// // Example of a method that is used to update an existing user using the PUT method
//   @Post()
//     public createUser(@Req() body: Request) {
//         console.log(body.body);
//         return 'This action creates a new user';
//     }

//   @Put()
//   public updateUser() {
//     return 'This action updates an existing user';
//   }

//   @Patch()
//   public partialUpdateUser() {
//     return 'This action partially updates an existing user';
//   }

//   @Delete()
//   public deleteUser() {
//     return 'This action deletes an existing user';
//   }
// }

// //  (***************************************************)

// //Chatper - 2 Controllers with Pipes
// import {
//   Controller,
//   Get,
//   Patch,
//   Post,
//   Put,
//   Delete,
//   Param,
//   Query,
//   Body,
//   Req,
//   ParseIntPipe,
//   DefaultValuePipe,
//   Ip,
//   Headers,
//   ValidationPipe,
// } from '@nestjs/common';

// import { Request } from 'express';
// import { CreateUserDto } from './dtos/create-user.dto';
// import { GetUserParamDto } from './dtos/get-user-param.dto';
// import { PatchUserDto } from './dtos/patch-user.dto';


// @Controller('users')
// export class UsersController {
  // This is a placeholder for the UsersController class.
  // You can add your methods and logic here as needed.
  // For example, you might want to add methods for handling user-related requests.
  // Example:
  // @Get()
  // getAllUsers() {
  //   return 'This action returns all users';
  // }

  // @Get()
  // getAllUsers() {
  //   return 'This action returns all users';
  // }

  // // Example of a method that validates a parameter using a pipe
  // @Get('{/:id}')
  // public getUserById(
  //   @Param('id', ParseIntPipe) id: number | undefined,
  //   @Query('limit') limit: any,
  // ) {
  //   console.log(`typeof id: ${typeof id}`);
  //   console.log(`typeof limit: ${typeof limit}`);
  //   return `This action returns a user with ID: ${id} and limit: ${limit}`;
  // }

  // // Example of a method that validates a parameter and a query using a pipe with default values
  // @Get('{/:id}')
  // public getUserById(
  //   @Param('id', ParseIntPipe) id: number | undefined,
  //   @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
  //   limit: number | undefined,
  //   @Query('page', new DefaultValuePipe(1), ParseIntPipe)
  //   page: number | undefined,
  // ) {
  //   console.log(`typeof id: ${typeof id}`);
  //   console.log(`typeof limit: ${typeof limit}`);
  //   console.log(`typeof page: ${typeof page}`);
  //   return `This action returns a user with ID: ${id} and limit: ${limit} and page: ${page}`;
  // }

  // // Example of a method that is used to create a new user using the POST method by grabbing the specific body content of the request
  // @Post()
  // public createUser(
  //   @Body() createUserDto: CreateUserDto,
  //   @Ip() ip: string,
  //   @Headers() headers: any,
  // ) {
  //   console.log(createUserDto);
  //   console.log(ip);
  //   console.log(headers);
  //   return 'This action creates a new user';
  // }

  // @Get('{/:id}')
  // public getUserById(@Param() getUserParamDto: GetUserParamDto) {
  //   console.log(getUserParamDto);
  //   return `This action returns a user with ID: ${getUserParamDto.id}`;
  // }

  // @Patch()
  // public partialUpdateUser(@Body() patchUserDto: PatchUserDto) {
  //   console.log(patchUserDto);
  //   return 'This action partially updates an existing user';
  // }
// }

// (***************************************************)
// // Chatper - 3 Controllers with Pipes and Services

import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Req,
  ParseIntPipe,
  DefaultValuePipe,
  Ip,
  Headers,
  ValidationPipe,
} from '@nestjs/common';

import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ServeStaticOptions } from '@nestjs/platform-express/interfaces/serve-static-options.interface';

// Example of a controller that handles user-related requests using Service provider
@Controller('users')
export class UsersController {
  constructor( 
    // The reason for using the constructor is to inject the UsersService into the UsersController
    // This is a common pattern in NestJS, where you use dependency injection to provide services to controllers.
    // Injecting the UsersService into the UsersController
    private readonly usersService: UsersService,
  ) {}

    @Get()
    public getAllUsers(
      @Param() getUserParamDto: GetUserParamDto,
      @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
      @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    ) {
      console.log(getUserParamDto);
      console.log(limit);
      console.log(offset);
      return this.usersService.findAll(getUserParamDto, limit, offset);
    }

     @Get('/:id')
    public getspecificUser(
      @Param('id', ParseIntPipe) id: number,
    ) {
      console.log(id);
      return this.usersService.findOneById(id);
    }
}
