import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 20px;
  max-width: 350px;
  max-height: 500px;

  p {
    font-weight: bold;
    font-size: 18px;
  }
  
  ul {
    margin-top: 10px;

    li { 
      font-size: 14px;
      list-style: none;
      font-weight: 500;

      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      
      span {
        margin-left: 5px;
        font-weight: bold;
      }
    }
  }
`;
