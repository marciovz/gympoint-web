import { all, takeLatest, put } from 'redux-saga/effects';
import history from '~/services/history';

import { redirectPageSuccess } from './actions';

export function* redirectPage({ payload }) {
  if (!payload) return;

  console.tron.log(payload);

  const { link } = payload;

  const pageName = link.split('/', 2)[1] || '';

  history.push(link);

  yield put(redirectPageSuccess(pageName));
}

export default all([
  takeLatest('@redirectPage/REDIRECT_PAGE_REQUEST', redirectPage),
]);
