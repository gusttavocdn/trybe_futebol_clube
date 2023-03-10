import TeamModel from '../../../../database/models/TeamModel';
import { TeamsRepository } from '../../../../repositories/implementations/TeamsRepository';
import { FindAllTeamsController } from './FindAllTeamsController';
import { FindAllTeamsService } from './FindAllTeamsService';

const teamsRepository = new TeamsRepository(TeamModel);
const findAllTeamsService = new FindAllTeamsService(teamsRepository);
const findAllTeamsController = new FindAllTeamsController(findAllTeamsService);

export { findAllTeamsController };
