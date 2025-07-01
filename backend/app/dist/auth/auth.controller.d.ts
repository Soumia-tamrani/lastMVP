import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            first_name: any;
            last_name: any;
            user_type: any;
        };
    }>;
    login(req: any, loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            first_name: any;
            last_name: any;
            user_type: any;
        };
    }>;
    getAllUsers(): Promise<import("../users/entities/user.entity").User[]>;
    getMe(req: any): Promise<any>;
    getProfile(req: any): Promise<{
        id: number;
        email: string;
        telephone_mobile: string;
        first_name: string;
        last_name: string;
        user_type: import("../users/entities/user.entity").UserType;
        role_info: Record<string, any> | null;
        created_at: Date;
        updated_at: Date;
    }>;
}
