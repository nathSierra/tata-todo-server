import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  PrimaryColumn,
  Generated,
} from 'typeorm';

import { IsEmail } from 'class-validator';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  @Generated('uuid')
  groupID: string;
  // learn about https://typeorm.io/#/relations
  // @OneToMany(type => TasksController, task => task.user)
}
