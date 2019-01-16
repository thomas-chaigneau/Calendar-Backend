'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      id: 1,
      title: 'event1',
      address: 'adress1',
      startingDate: '2019-01-16T14:00:00',
      endingDate: '2019-01-16T14:00:00',
      frequency: 'once',
      daysSelected: '',
      contact: 'contact1',
      category: 'category1',
      createdAt: '2019-01-14T10:24:29.956Z',
      updatedAt: '2019-01-14T10:24:29.956Z',
    },
    {
      id: 2,
      title: 'event2',
      address: 'adress2',
      startingDate: '2019-01-19T14:00:00',
      endingDate: '2019-01-16T19:00:00',
      frequency: 'once',
      daysSelected: '',
      contact: 'contact2',
      category: 'category2',
      createdAt: '2019-01-14T10:24:39.956Z',
      updatedAt: '2019-01-14T10:24:39.956Z',
    },
    {
      id: 3,
      title: 'event3',
      address: 'adress3',
      startingDate: '2019-01-16T123:00:00',
      endingDate: '2019-01-16T23:00:00',
      frequency: 'once',
      daysSelected: '',
      contact: 'contact3',
      category: 'category3',
      createdAt: '2019-01-14T10:34:29.956Z',
      updatedAt: '2019-01-14T10:34:29.956Z',
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
