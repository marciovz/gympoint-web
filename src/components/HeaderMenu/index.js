import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.png';

import NavMenu from '~/components/NavMenu';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';
import { redirectPageRequest } from '~/store/modules/redirectPage/actions';

export default function HeaderMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.profile.name);

  function handleRedirect(link) {
    dispatch(redirectPageRequest(link));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <Link to="/plan" onClick={() => handleRedirect('/plan')}>
            GYMPOINT
          </Link>

          <NavMenu />
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{userName}</strong>
              <button type="button" onClick={handleSignOut}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
