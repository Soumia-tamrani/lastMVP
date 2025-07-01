import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  Unique,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Role } from './role.entity';

@Entity('user_roles')
@Unique(['user_id', 'role_id'])
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column()
  user_id: number;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column()
  role_id: number;

  @ManyToOne(() => User, { nullable: true })
  assigned_by: User;

  @Column({ nullable: true })
  assigned_by_id: number;

  @CreateDateColumn()
  assigned_at: Date;
}