import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountsRepository.save(createAccountDto);
  }

  findAll(): Promise<Account[]> {
    return this.accountsRepository.find();
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.accountsRepository.save(updateAccountDto);
  }

  async findOne(username: string): Promise<Account> {
    return await this.accountsRepository.findOne({
      where: { username: username },
    });
  }

  async remove(id: string): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}
