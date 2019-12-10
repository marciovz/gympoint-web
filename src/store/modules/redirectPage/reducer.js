import produce from 'immer';
import history from '~/services/history';

const INITIAL_STATE = {
  pageName: history.location.pathname.split('/', 2)[1] || '',
};

export default function redirectPage(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@redirectPage/REDIRECT_PAGE_SUCCESS': {
        draft.pageName = action.payload.pageName;
        break;
      }
      default:
    }
  });
}
