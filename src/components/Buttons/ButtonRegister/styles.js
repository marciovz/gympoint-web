import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { darken } from 'polished';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 20px;
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
`;

export const Icon = styled(MdAdd)`
  font-size: 20px;
  margin-right: 10px;
  color: #fff;
`;
