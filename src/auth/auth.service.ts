import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Account } from 'src/accounts/account.entity';
import { AccountsService } from '../accounts/accounts.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: AccountsService,
    private jwtService: JwtService,
  ) {}

  cleanUser(user: Account) {
    const { password, isActive, ...result } = user;
    return result;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user || !user.password) {
      return null;
    }
    const isCorrectPassword = bcrypt.compare(pass, user.password);
    if (user && isCorrectPassword) {
      return this.cleanUser(user);
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    const foundUser = await this.usersService.findOne(user.username);
    console.info('does have teams?', foundUser);
    return {
      accessToken: this.jwtService.sign(payload),
      user: this.cleanUser(foundUser),
    };
  }
}
