import styled from 'styled-components';

import background from '../../assets/starlink_11_dekstop.webp';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;

  background: url(${background}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;


export const Latest = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  margin: 10% 40px;
`;

export const Upcoming = styled.section`

  max-width: 90%;
  margin: 0 auto;

  .section-header {
    text-align: center;
    margin-top: 10px;
  }

  .upcoming-items {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .rockets-list {

    p {
      font-weight: bold;
      font-size: 24px;
    }
  }

  h2 {
    font-size: 24px;
  }
`;