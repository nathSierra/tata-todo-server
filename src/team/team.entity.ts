import { Account } from 'src/accounts/account.entity';
import { Task } from 'src/tasks/task.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Account, {
    cascade: true,
  })
  @JoinTable()
  accounts: Account[];

  @OneToMany(() => Task, (task) => task.team)
  tasks: Task[];
}
