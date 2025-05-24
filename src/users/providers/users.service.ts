import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user-param.dto';
import { AuthService } from 'src/auth/provider/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        // Inject the AuthService to use its methods
        @Inject(forwardRef(() => AuthService)) // Use forwardRef to avoid circular dependency
        private readonly authService: AuthService,

        // Inject the UsersRepository to use its methods
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}
    
    /**
     * Create a new user
     * @param createUserDto - Data Transfer Object for creating a user
     * @returns The created user
     */
    
    public async createUser(createUserDto: CreateUserDto) {
        // Check if the user already exists
        const existingUser = await this.usersRepository.findOne({
            where: { email: createUserDto.email },
        });
        if (existingUser) {
            throw new Error('User already exists');
        }
        let user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }

    /**
     * Find all users
     */  
    public findAll(getUserParamDto: GetUserParamDto,
        limit: number,
        offset: number,
    ) {

        const isAuth = this.authService.isAuthenticated();
        console.log(isAuth);

        return [
            {
                firstName: 'John Doe',
                email: 'john.doe@example.com'
            },
            {
                firstName: 'Alice',
                email: 'alice.doe@example.com'
            },
        ];
    }
    /**
     * Find one user
     */
    public findOneById(id: number) {
        return {
            id: id,
            firstName: 'John Doe',
            email: 'john.doe@example.com'
        };
    }

}