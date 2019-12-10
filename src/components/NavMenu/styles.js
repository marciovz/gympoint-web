import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  padding-left: 10px;
  height: 30px;
  border-left: 1px solid #eee;
  display: flex;
  align-items: center;
`;

export const ItensMenu = styled.span`
  margin: 0 10px;
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.selected ? '#444' : '#999')};
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #444;
  }
`;
