import { UserType } from '../entities/user.entity';
export declare class CreateUserDto {
    email: string;
    telephone_mobile?: string;
    password: string;
    first_name: string;
    last_name: string;
    user_type?: UserType;
    role_info?: Record<string, any>;
}
export declare class UpdateUserDto {
    email?: string;
    telephone_mobile?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    user_type?: UserType;
    role_info?: Record<string, any>;
}
