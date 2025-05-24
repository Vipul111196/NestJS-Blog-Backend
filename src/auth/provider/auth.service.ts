import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService,
    ) {}

    public login(email: string, password: string, id: string) {
        // Check if the user exists in the database
        const user = this.usersService.findOneById(1234);
        // login logic
        // If the user exists, generate a JWT token
        return "SAMPLE_TOKEN"
    }

    public isAuthenticated() {
        return true;
    }
}