import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignupDto } from './dto/signup.dto';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    getAllUsers(): Promise<User[]>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            first_name: any;
            last_name: any;
            user_type: any;
        };
    }>;
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
    getProfile(userId: number): Promise<{
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
