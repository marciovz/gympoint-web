import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function HeaderDashBoard({ title, children }) {
  return (
    <Container>
      <span>{title}</span>
      <div>{children}</div>
    </Container>
  );
}

HeaderDashBoard.defaultProps = {
  title: '',
  children: '',
};

HeaderDashBoard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
