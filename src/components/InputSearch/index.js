import React from 'react';

import { Container, Icon, InputComponent } from './styles';

export default function InputSearch(props) {
  return (
    <Container>
      <Icon />
      <InputComponent {...props} />
    </Container>
  );
}
