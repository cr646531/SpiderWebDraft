const conn = require('./conn');

const Player = conn.define('player', {
  info_player: conn.Sequelize.STRING,
  info_team: conn.Sequelize.STRING,
  info_position: conn.Sequelize.STRING,
  info_age: conn.Sequelize.INTEGER,
  games_played: conn.Sequelize.INTEGER,
  games_started: conn.Sequelize.INTEGER,
  pass_completed: conn.Sequelize.INTEGER,
  pass_attempted: conn.Sequelize.INTEGER,
  pass_yards: conn.Sequelize.INTEGER,
  pass_touchdowns: conn.Sequelize.INTEGER,
  pass_interceptions: conn.Sequelize.INTEGER,
  rush_attempts: conn.Sequelize.INTEGER,
  rush_yards: conn.Sequelize.INTEGER,
  rush_yardsPerAttempted: conn.Sequelize.INTEGER,
  rush_touchdowns: conn.Sequelize.INTEGER,
  reception_targets: conn.Sequelize.INTEGER,
  reception_receptions: conn.Sequelize.INTEGER,
  reception_yards: conn.Sequelize.INTEGER,
  reception_yardsPerReception: conn.Sequelize.INTEGER,
  fumble_fumbles: conn.Sequelize.INTEGER,
  fumble_fumblesLost: conn.Sequelize.INTEGER,
  scoring_touchdowns: conn.Sequelize.INTEGER,
  scoring_twoPointConversion: conn.Sequelize.INTEGER,
  scoring_twoPointConversionPasses: conn.Sequelize.INTEGER,
  fantasy_standardPoints: conn.Sequelize.INTEGER,
  fantasy_pprPoints: conn.Sequelize.INTEGER,
  fantasy_vdb: conn.Sequelize.INTEGER,
  fantasy_positionalRankings: conn.Sequelize.INTEGER,
  fantasy_overallRankings: conn.Sequelize.INTEGER
});

module.exports = Player;