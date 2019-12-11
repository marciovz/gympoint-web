import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { darken } from 'polished';

export const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 50px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: bold;
    color: #444444;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
    background-color: #ee4d64;
    border-radius: 5px;
    transition: 0.2s;
    border: none;

    &:hover {
      background-color: ${darken(0.1, '#ee4d64')};
    }
  }
`;

export const Icon = styled(MdAdd)`
  font-size: 20px;
  margin-right: 10px;
  color: #fff;
`;

export const Content = styled.div`
  margin-top: 10px;
  padding: 30px;
  background-color: #fff;
`;

export const LineTitle = styled.div`
  display: grid;
  grid-template-columns: 6fr 3fr 3fr 1fr 1fr;
  margin-bottom: 20px;

  h1 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #444444;

    &:first-child {
      text-align: left;
    }
  }
`;

export const LineContent = styled.div``;

export const Line = styled.div`
  margin: 5px 0;
  padding: 15px 0;
  display: grid;
  grid-template-columns: 6fr 3fr 3fr 1fr 1fr;
  text-align: center;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: 0;
  }

  span {
    font-size: 16px;
    font-weight: normal;
    color: #666666;

    &:first-child {
      text-align: left;
    }
  }
`;

export const LinkEditar = styled.button`
  font-size: 15px;
  font-weight: normal;
  color: #4d85ee;
  border: 0;
  background: none;

  &:hover {
    color: ${darken(0.1, '#4d85ee')};
  }
`;

export const LinkApagar = styled.button`
  font-size: 15px;
  font-weight: normal;
  color: #de3b3b;
  border: 0;
  background: none;

  &:hover {
    color: ${darken(0.1, '#de3b3b')};
  }
`;
