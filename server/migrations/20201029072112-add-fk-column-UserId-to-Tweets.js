'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Tweets',
      'UserId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Tweets', 'UserId')
  }
};
