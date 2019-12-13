import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';
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
  background-color: #cccccc;
  border-radius: 5px;
  transition: 0.2s;
  border: none;

  &:hover {
    background-color: ${darken(0.1, '#cccccc')};
  }
`;

export const Icon = styled(MdChevronLeft)`
  font-size: 20px;
  margin-right: 10px;
  color: #fff;
`;
