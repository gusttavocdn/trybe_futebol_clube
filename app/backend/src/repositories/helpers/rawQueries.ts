import { ScoreboardOptions } from '../contracts/IMatchesRepository';

const DATABASE = process.env.PGDATABASE || 'TRYBE_FUTEBOL_CLUBE';

/* eslint-disable max-lines-per-function */
export const leaderboardQuery = (
  teamA: ScoreboardOptions,
  teamB: ScoreboardOptions,
) => `
SELECT
    t.team_name AS name,
SUM(
    CASE
        WHEN ${teamA}_goals > ${teamB}_goals THEN 3
        WHEN ${teamA}_goals = ${teamB}_goals THEN 1
        ELSE 0
    END
) AS totalPoints,
COUNT(${teamA}) AS totalGames,
SUM(
    CASE
        WHEN ${teamA}_goals > ${teamB}_goals THEN 1
        ELSE 0
    END
) AS totalVictories,
SUM(
    CASE
        WHEN ${teamA}_goals = ${teamB}_goals THEN 1
        ELSE 0
    END
) AS totalDraws,
SUM(
    CASE
        WHEN ${teamA}_goals < ${teamB}_goals THEN 1
        ELSE 0
    END
) AS totalLosses,
SUM(${teamA}_goals) AS goalsFavor,
SUM(${teamB}_goals) AS goalsOwn,
SUM(${teamA}_goals) - SUM(${teamB}_goals) AS goalsBalance,
ROUND( (
        SUM(
            CASE
                WHEN ${teamA}_goals > ${teamB}_goals THEN 3
                WHEN ${teamA}_goals = ${teamB}_goals THEN 1
                ELSE 0
            END
        ) / (COUNT(${teamA}) * 3) * 100
    ),
    2
) AS efficiency
FROM
${DATABASE}.matches AS m
INNER JOIN ${DATABASE}.teams AS t ON m.${teamA} = t.id
WHERE in_progress = 0
GROUP BY ${teamA}
ORDER BY
totalPoints DESC,
goalsBalance DESC,
goalsFavor DESC,
goalsOwn DESC;`;
