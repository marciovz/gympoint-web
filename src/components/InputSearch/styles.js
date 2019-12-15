import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
  width: 250px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: center !important;
`;

export const InputComponent = styled(Input)`
  font-size: 14px;
  color: #444;
  border: 0;

  &::placeholder {
    color: #999;
  }
`;

export const Icon = styled(MdSearch)`
  font-size: 16px;
  color: #999;
  margin-right: 15px;
`;
