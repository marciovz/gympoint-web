import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  height: 80px;
  background: #fff;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin: 0 10px 0 50px;
      width: 50px;
      height: 25px;
    }

    > a {
      font-size: 15px;
      font-weight: bold;
      color: #ee4d64;
      transition: 0.2s;

      &:hover {
        color: ${darken(0.2, '#ee4d64')};
      }
    }
  }
`;

export const Profile = styled.div`
  margin-right: 50px;
  strong {
    font-size: 14px;
    font-weight: bold;
    color: #666;
  }

  button {
    display: block;
    padding: 3px 0;
    font-size: 14px;
    font-weight: normal;
    color: #de3b3b;
    border: 0;
    background: 0;
    transition: 0.2s;

    &:hover {
      color: ${darken(0.2, '#de3b3b')};
    }
  }
`;
