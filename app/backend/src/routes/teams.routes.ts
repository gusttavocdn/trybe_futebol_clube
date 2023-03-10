import { Router } from 'express';
import { findTeamController } from '../modules/teams/useCases/FindTeam';
import { findAllTeamsController } from '../modules/teams/useCases/FindAllTeams';

const teamsRouter = Router();

teamsRouter.get('/teams', findAllTeamsController.handle);
teamsRouter.get('/teams/:id', findTeamController.handle);

export { teamsRouter };
