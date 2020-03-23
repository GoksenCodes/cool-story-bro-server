"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("stories", [
      {
        name: "Story 1",
        homepageId: 1,
        content: "Interesting story",
        imageurl: "https://i.imgur.com/tdszVPu.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Story 2",
        homepageId: 1,
        content: "Crazy story",
        imageurl: "https://imgur.com/gallery/syMgrdn",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Story 3",
        homepageId: 2,
        content: "Love story",
        imageurl: "https://imgur.com/gallery/nUNj4Cw",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Story 4",
        homepageId: 2,
        content: "Suprising story",
        imageurl: "https://imgur.com/gallery/syMgrdn",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
