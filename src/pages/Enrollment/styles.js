import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { darken } from 'polished';

export const LineTitle = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 1fr 1fr 1fr;
  margin-bottom: 20px;

  h1 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    text-transform: uppercase;

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
  grid-template-columns: 2fr 2fr 2fr 2fr 1fr 1fr 1fr;
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

export const LinkEditar = styled(Link)`
  font-size: 15px;
  font-weight: normal;
  color: #4d85ee;

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

export const CheckCircle = styled(MdCheckCircle)`
  margin: 0 auto;
  font-size: 20px;
  color: ${props => (props.checked ? '#42cb59' : '#dddddd')};
`;
