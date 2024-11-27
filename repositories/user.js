const db = require("../models/index");

const getUsersRepo = async () => {
  try {
    const users = await db.User.findAll({
      attributes: ["id", "name", "email"],
    });
    return users;
  } catch (error) {
  }
};

const getUserRepo = async (userId) => {
  try {
    const user = await db.User.findAll({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {

  }
};

module.exports = { getUsersRepo, getUserRepo };
