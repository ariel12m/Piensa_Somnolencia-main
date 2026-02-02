import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: any;
    }>;
    register(createUserDto: any): Promise<{
        access_token: string;
        user: any;
    }>;
}
