import styled, { createGlobalStyle } from 'styled-components';

import { Link } from 'react-router-dom';

export default createGlobalStyle`
  :root {
    --primary-color: #fff;
    --secondary-color: #000;
    --gray: #979797;
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-transform: uppercase;

  }
  body {
    font-family: 'Open Sans', sans-serif;

    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  h1 {
    font-weight: bold;
    font-size: 24px;
  }

  h2 {
    font-size: 2.4em;
  }

  span {
    color: var(--gray);
  }

`;

export const Anchor = styled(Link)`
  color: var(--primary-color);
  text-decoration: ${props => props.underlined ? 'underline' : 'none'};
  font-weight: bold;
  font-size: 14px;
`;

export const PrimaryButton = styled.button`
  background-color: transparent;
  padding: 15px 50px;
  font-weight: bold;
  
  border: 3px solid white;
  color: white;

  &:hover {
    transition-duration: 200ms;
    color: black;
    background-color: white;

    cursor: cell;
  }
`;