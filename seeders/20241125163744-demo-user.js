"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "Roshidh",
        email: "r@gmail.com",
        age: 26,
        gender: "male",
      },
      {
        id: 2,
        name: "ABC",
        email: "abc@gmail.com",
        age: 28,
        gender: "male",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
