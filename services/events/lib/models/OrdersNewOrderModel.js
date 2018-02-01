module.exports = {
  fields: {
    id: {
      type: 'uuid',
      default: {'$db_function': 'uuid()'}
    },
    userId: 'varchar',
    orderId: 'varchar',
    amount: 'int',
    created: {
      type: 'timestamp',
      default: { '$db_function': 'toTimestamp(now())' }
    },
    day: 'date'
  },
  key: ['day', 'created'],
  clustering_order: {'created': 'desc'}
};