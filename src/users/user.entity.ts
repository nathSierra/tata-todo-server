import { TasksController } from 'src/tasks/tasks.controller';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
  // learn about https://typeorm.io/#/relations
  // @OneToMany(type => TasksController, task => task.user)
}
