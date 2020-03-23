"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("homepages", [
      {
        title: "Home Page A",
        userId: 1,
        description: "First Home Page",
        backgroundcolor: "white",
        color: "red",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Home Page B",
        userId: 2,
        description: "Second Home Page",
        backgroundcolor: "black",
        color: "yellow",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
