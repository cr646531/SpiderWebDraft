const conn = require('./conn');
const Player = require('./Player');

const syncAndSeed = ()=> {
  return conn.sync({ force: true });
};

module.exports = {
  models: {
    Player
  },
  syncAndSeed
};
