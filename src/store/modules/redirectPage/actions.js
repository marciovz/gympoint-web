export function redirectPageRequest(link) {
  return {
    type: '@redirectPage/REDIRECT_PAGE_REQUEST',
    payload: { link },
  };
}

export function redirectPageSuccess(pageName) {
  return {
    type: '@redirectPage/REDIRECT_PAGE_SUCCESS',
    payload: { pageName },
  };
}
