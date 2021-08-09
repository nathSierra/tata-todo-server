import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
  // learn about https://typeorm.io/#/relations
  // @OneToMany(type => TasksController, task => task.user)
}
