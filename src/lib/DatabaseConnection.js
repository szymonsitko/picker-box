import Realm from 'realm';

export const createDatabaseSchema = () => {
  class Records {}
  Records.schema = {
    name: 'Records',
    primaryKey: 'datestamp',
    properties: {
        datestamp: 'int',
        user: 'string',
        difficulty: 'int',
        score: {type: 'string', default: ''}
    },
  };
  return Records.schema;
}

export const realmDatabase = new Realm({schema: [createDatabaseSchema()]});
