import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  difficulty: number;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ default: null })
  groupID: string;

  @Column({ default: null })
  userID: string;
}
