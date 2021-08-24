import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto, AddTeamMemberDto } from './dto/update-team.dto';
import { teamProviders } from './team.providers';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Post('addMember')
  addUserToTeam(@Body() addTeamMemberDto: AddTeamMemberDto) {
    console.info(addTeamMemberDto);
    this.teamService.addTeamMember(addTeamMemberDto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get('/accounts/:teamID')
  findAccountsByTeamID(@Param('teamID') teamID: string) {
    return this.teamService.findAccountsByTeamID(teamID);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
