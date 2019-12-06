import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  padding: 40px 20px;
  width: 100%;
  max-width: 315px;
  text-align: center;
  background-color: #fff;
  border-radius: 4px;

  img {
    height: 50px;
  }

  h1 {
    margin-top: 10px;
    font-size: 29px;
    font-weight: bold;
    color: #ee4d64;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    label {
      margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
      text-align: left;
      color: #444444;

      input {
        margin: 5px 0;
        padding: 0 15px;
        width: 100%;
        height: 44px;
        color: #222;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #fff;

        &::placeholder {
          color: #999;
        }
      }

      span {
        display: block
        text-align: right;
        font-size: 12px;
        color: #fb6f91;
        align-self: flex-end;
        font-weight: bold;
      }
    }

    button {
      margin: 8px 0 0;
      height: 44px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      background: #ee4d64;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
