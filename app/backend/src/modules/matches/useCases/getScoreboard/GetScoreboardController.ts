import { Request, Response } from 'express';
import { GetScoreboardService } from './GetScoreboardService';

export class GetScoreboardController {
  constructor(private readonly _service: GetScoreboardService) {}

  public handle = async (req: Request, res: Response) => {
    const scoreboardType = this.getScoreboardType(req.url);

    const scoreboard = await this.getScoreboard(scoreboardType);
    return res.status(200).json(scoreboard);
  };

  private async getScoreboard(scoreboardType: string) {
    switch (scoreboardType) {
      case 'home':
        return this._service.execute('home_team', 'away_team');
      case 'away':
        return this._service.execute('away_team', 'home_team');
      default:
        return this._service.execute();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private getScoreboardType(url: string): string {
    if (url.endsWith('home')) return 'home';
    if (url.endsWith('away')) return 'away';

    return 'full';
  }
}
