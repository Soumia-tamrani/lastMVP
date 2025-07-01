import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignupDto } from './dto/signup.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    
    if (user && await this.usersService.validatePassword(password, user.password_hash)) {
      const { password_hash, ...result } = user;
      return result;
    }
    return null;
  }
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
  

  async login(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id,
      userType: user.user_type 
    };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        user_type: user.user_type,
      },
    };
  }

  async signup(signupDto: SignupDto) {
    const user = await this.usersService.create(signupDto);
    const { password_hash, ...userWithoutPassword } = user;
    
    return this.login(userWithoutPassword);
  }         

  async getProfile(userId: number) {
    const user = await this.usersService.findById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    
    const { password_hash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}