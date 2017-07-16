import { createDatabaseSchema, realmDatabase } from '../lib/DatabaseConnection';
import * as types from './types';

export function initializeDatabaseConnection(schema) {
  const records = realmDatabase.objects('Records');

  // Debugging
  console.log("All database entries: ", records);

  // Init some dummy user
  // realmDatabase.write(() => {
  //   savedRecords = realmDatabase.create('Records', {
  //       datestamp: Date.now(),
  //       user: 'Rob',
  //       difficulty: 0
  //   });
  // });

  return {
    type: types.CONNECT_TO_DATABASE,
    payload: records
  }
}

export function storeNewGameDetails(user, difficulty) {
  const records = realmDatabase.objects('Records');
  realmDatabase.write(() => {
    savedRecords = realmDatabase.create('Records', {
        datestamp: Date.now(),
        user: user,
        difficulty: difficulty
    });
  });
  const userObject = records[Object.keys(records).length - 1];
  return {
    type: types.STORE_GAME_DETAILS,
    payload: userObject
  }
}

export function storeFinishedGameResults(result) {
  const records = realmDatabase.objects('Records');
  realmDatabase.write(() => {
    realmDatabase.create('Records',
      {
        datestamp: result.datestamp,
        user: result.user,
        difficulty: result.difficulty,
        score: result.score,
      }, true);
  });
  const userObject = records.filtered(`datestamp = "${result.datestamp}"`);
  return {
    type: types.UPDATE_GAME_DETAILS,
    payload: userObject
  }
}
