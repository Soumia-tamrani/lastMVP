import {
     Entity,
     PrimaryGeneratedColumn,
     Column,
     CreateDateColumn,
     UpdateDateColumn,
   } from 'typeorm';
   import { Exclude } from 'class-transformer';

   export enum UserType {
     PROFESSIONAL = 'PROFESSIONAL',
     ENTREPRISE = 'ENTREPRISE',
     ADMIN = 'ADMIN',
     SUPER_ADMIN = 'SUPER_ADMIN',
     FREELANCE = 'FREELANCE', 
   }

   @Entity('users')
   export class User {
     @PrimaryGeneratedColumn()
     id: number;

     @Column({ unique: true })
     email: string;

     @Column({ unique: true, nullable: true })
     telephone_mobile: string;

     @Column()
     @Exclude()
     password_hash: string;

     @Column()
     first_name: string;

     @Column()
     last_name: string;

     @Column({
       type: 'enum',
       enum: UserType,
       default: UserType.PROFESSIONAL,
     })
     user_type: UserType;

     @Column({
       type: 'jsonb', 
       nullable: true,
       comment: "Informations spécifiques au rôle de l'utilisateur",
     })
     role_info: Record<string, any> | null;

     @CreateDateColumn()
     created_at: Date;

     @UpdateDateColumn()
     updated_at: Date;
   }