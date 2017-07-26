import { takeEvery } from 'redux-saga/effects';

import { GET_INITIAL_CONVERSION, SWAP_CURRENCY, CHANGE_BASE_CURRENCY } from '../actions/currencies';

function* fetchLatestConversionRate(action) {
  console.log('TODO: Update the rates.', action);
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRate);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRate);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRate);
}
