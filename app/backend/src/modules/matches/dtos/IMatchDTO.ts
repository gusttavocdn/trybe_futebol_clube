import { Match } from '../../../entities';

export type IMatchDTO = {
  teamHome: {
    teamName: string;
  };
  teamAway: {
    teamName: string;
  };
} & Match;
