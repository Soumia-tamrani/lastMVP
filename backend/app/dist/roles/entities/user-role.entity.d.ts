import { User } from '../../users/entities/user.entity';
import { Role } from './role.entity';
export declare class UserRole {
    id: number;
    user: User;
    user_id: number;
    role: Role;
    role_id: number;
    assigned_by: User;
    assigned_by_id: number;
    assigned_at: Date;
}
