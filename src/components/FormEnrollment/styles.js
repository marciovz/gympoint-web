import styled from 'styled-components';

export const Container = styled.div`
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

      /*
      & > div:first-of-type {
        width: 100%;
      }
*/
      input,
      select {
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
        display: block;
        text-align: right;
        font-size: 12px;
        color: #fb6f91;
        align-self: flex-end;
        font-weight: bold;
      }
    }
  }
`;

export const LineTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  margin: 10px 0;
`;
