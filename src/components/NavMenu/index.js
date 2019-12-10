import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ItensMenu } from './styles';
import itens from './listItens';

import { redirectPageRequest } from '~/store/modules/redirectPage/actions';

export default function NavMenu() {
  const dispatch = useDispatch();
  const pageName = useSelector(state => state.redirectPage.pageName);

  function handleRedirect(link) {
    dispatch(redirectPageRequest(link));
  }

  return (
    <Container>
      {itens.map(iten => (
        <ItensMenu
          selected={pageName === `${iten.page}` ? 'selected' : null}
          onClick={() => handleRedirect(`/${iten.page}`)}
        >
          {iten.title}
        </ItensMenu>
      ))}
    </Container>
  );
}
