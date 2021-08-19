import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './account.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}
  saltOrRounds = 10;
  async create(createAccountDto: CreateAccountDto) {
    const { username, email, password } = createAccountDto;

    const foundUsername = await this.accountsRepository.findOne({
      where: { username },
    });
    if (foundUsername) {
      return { errors: 'Username taken' };
    }
    const foundEmail = await this.accountsRepository.findOne({
      where: { email },
    });
    if (foundEmail) {
      return { errors: 'Email taken' };
    }

    const hashed_password = await bcrypt.hash(password, this.saltOrRounds);
    return this.accountsRepository.save({
      ...createAccountDto,
      password: hashed_password,
    });
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
      relations: ['teams'],
    });
  }

  async findByID(id: string): Promise<Account> {
    return await this.accountsRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: string): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}
