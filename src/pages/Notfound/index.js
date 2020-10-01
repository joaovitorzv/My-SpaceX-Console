import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';
import { Anchor } from '../../styles/GlobalStyles';

function Notfound() {
  return (
    <Container>
      <Header />


      <div className="back-link">
        <h1>Sorry, page not found 404</h1>
        <Anchor underlined to='/launches'>Go back to home</Anchor>
      </div>

    </Container>
  );
}

export default Notfound;