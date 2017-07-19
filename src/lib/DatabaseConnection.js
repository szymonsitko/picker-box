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
        result: {type: 'string', default: ''},
        score: {type: 'int', default: 0}
    },
  };
  return Records.schema;
}

export const realmDatabase = new Realm({schema: [createDatabaseSchema()]});
