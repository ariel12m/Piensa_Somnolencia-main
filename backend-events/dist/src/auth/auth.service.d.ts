import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
    } | null>;
    login(user: any): Promise<{
        access_token: string;
        user: any;
    }>;
    register(createUserDto: any): Promise<{
        access_token: string;
        user: any;
    }>;
}
