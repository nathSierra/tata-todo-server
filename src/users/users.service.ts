import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    console.info(createUserDto);
    return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    console.info(id);
    return this.usersRepository.save(updateUserDto);
  }

  async findOne(username: string): Promise<User> {
    return this.usersRepository.find({
      where: { username: username },
    })[0];
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
