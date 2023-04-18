const ENGINE_DB = process.env.ENGINE_DB;

//saves the DB route and use it dinamically dependin the env variables
const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./mysql";

const models = {
  usersModel: require(`${pathModels}/users`),
  tracksModel: require(`${pathModels}/tracks`),
  storageModel: require(`${pathModels}/storage`),
};

module.exports = models;
