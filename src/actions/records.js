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
  userObject = {};
  userObject['datestamp'] = Date.now();
  userObject['user'] = user;
  userObject['difficulty'] = difficulty;
  return {
    type: types.STORE_GAME_DETAILS,
    payload: userObject
  }
}

export function storeFinishedGameResults(result) {
  realmDatabase.write(() => {
    realmDatabase.create('Records',
      {
        datestamp: result.datestamp,
        user: result.user,
        difficulty: result.difficulty,
        result: result.result,
        score: result.score
      }, true);
  });
  const records = realmDatabase.objects('Records');
  const userObject = records.filtered(`datestamp = "${result.datestamp}"`);
  return {
    type: types.UPDATE_GAME_DETAILS,
    payload: userObject[0]
  }
}

export function storeFinishedGameResultsOnReducer(result) {
  return {
    type: types.UPDATE_USER_RESULTS_ON_REDUCER,
    payload: result
  }
}

export function clearReducerData() {
  return {
    type: types.CLEAR_USER_DATA
  }
}

export function deleteDatabaseRecord({ datestamp }) {
  const records = realmDatabase.objects('Records');
  realmDatabase.write(() => {
    const entryToDelete = records.filtered(`datestamp = "${datestamp}"`);
    realmDatabase.delete(entryToDelete[0]);
  });
  return {
    type: types.DELETE_LAST_GAME_ENTRY
  }
}
