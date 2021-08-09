import { Injectable } from '@nestjs/common';
import { AccountsService } from '../accounts/accounts.service';

@Injectable()
export class AuthService {
  constructor(private usersService: AccountsService) {
    console.info('we construct?');
  }

  async validateUser(username: string, pass: string): Promise<any> {
    console.info(username, pass);
    console.info('in validate user');
    const user = await this.usersService.findOne(username);
    console.log('should see user', user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
