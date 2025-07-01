import { UserRole } from './user-role.entity';
export declare class Role {
    id: number;
    name: string;
    description: string;
    users: UserRole[];
}
