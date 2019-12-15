import React from 'react';
import PropTypes from 'prop-types';

import HeaderMenu from '~/components/HeaderMenu';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <HeaderMenu />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
