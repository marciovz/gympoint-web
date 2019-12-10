import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';
import { redirectPageRequest } from '~/store/modules/redirectPage/actions';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const dispatch = useDispatch();

  function handleRedirect(link) {
    dispatch(redirectPageRequest(link));
  }

  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    handleRedirect('/');
  }

  if (signed && !isPrivate) {
    handleRedirect('/plan');
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
