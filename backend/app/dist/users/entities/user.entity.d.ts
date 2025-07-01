export declare enum UserType {
    PROFESSIONAL = "PROFESSIONAL",
    ENTREPRISE = "ENTREPRISE",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    FREELANCE = "FREELANCE"
}
export declare class User {
    id: number;
    email: string;
    telephone_mobile: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    user_type: UserType;
    role_info: Record<string, any> | null;
    created_at: Date;
    updated_at: Date;
}
