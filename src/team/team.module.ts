import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { DatabaseModule } from 'src/database.module';
import { teamProviders } from 'src/team/team.providers';
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  imports: [DatabaseModule, AccountsModule],
  controllers: [TeamController],
  providers: [...teamProviders, TeamService],
})
export class TeamModule {}
