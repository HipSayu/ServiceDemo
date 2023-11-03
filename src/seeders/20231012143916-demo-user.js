'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('User', 
     [
      {
       username: 'Hip dz1',
       password: '1234567',
       email: 'Phát 1',
     },
     {
      username: 'Hip dz2',
      password: '1234567',
      email: 'Phát 2',
    },
    {
      username: 'Hip dz3',
      password: '1234567',
      email: 'Phát 3',
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
