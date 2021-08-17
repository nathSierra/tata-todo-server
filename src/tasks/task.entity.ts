import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Team } from 'src/team/team.entity';

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

  @ManyToOne(() => Team, (team) => team.tasks, {
    cascade: ['insert', 'update'],
  })
  team: Team;

  @Column({ default: null })
  assignedUserID: string;
}
