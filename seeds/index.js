const sequelize = require('../config/connection');
const blogSeed = require('./blogData');
const userSeed = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await blogSeed();

  await userSeed();

  process.exit(0);
};

seedAll();