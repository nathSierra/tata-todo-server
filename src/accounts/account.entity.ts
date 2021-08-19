import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { IsEmail } from 'class-validator';
import { Team } from 'src/team/team.entity';

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

  @ManyToMany(() => Team, (team) => team.accounts)
  teams: Team[];

  // learn about https://typeorm.io/#/relations
  // @OneToMany(type => TasksController, task => task.user)
}
