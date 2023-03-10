import { TeamsRepository } from '../../../../repositories/implementations/TeamsRepository';
import TeamModel from '../../../../database/models/TeamModel';
import { FindTeamService } from './FindTeamService';
import { FindTeamController } from './FindTeamController';

const teamsRepository = new TeamsRepository(TeamModel);
const findTeamService = new FindTeamService(teamsRepository);
const findTeamController = new FindTeamController(findTeamService);

export { findTeamController };
