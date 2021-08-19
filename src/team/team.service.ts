import { Inject, Injectable } from '@nestjs/common';
import { AccountsService } from '../accounts/accounts.service';
import { Account } from 'src/accounts/account.entity';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { AddTeamMemberDto, UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @Inject('TEAM_REPOSITORY')
    private teamsRepository: Repository<Team>,
    private accountsService: AccountsService,
  ) {}
  async create(createTeamDto: CreateTeamDto) {
    const { userID, ...team } = createTeamDto;
    const foundUser = await this.accountsService.findByID(userID[0]);

    const createdTeam = await this.teamsRepository.save(team);
    const teamWithAccount = {
      ...createdTeam,
      accounts: [foundUser],
    };
    return this.teamsRepository.save(teamWithAccount);
  }

  async addTeamMember(addTeamMemberDto: AddTeamMemberDto) {
    const { userID, teamID } = addTeamMemberDto;
    const foundUser = await this.accountsService.findByID(userID);
    const foundTeam = await this.teamsRepository.findOne({
      where: { id: teamID },
      relations: ['accounts'],
    });
    foundTeam.accounts.push(foundUser);
    return await this.teamsRepository.save(foundTeam);
  }

  async findTeamWithAccounts(id: string) {
    return await this.teamsRepository.find({
      where: { id: id },
    })[0];
  }

  findAll() {
    return `This action returns all team`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
