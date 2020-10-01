import React from 'react';

import { Container, Logo } from './styles';
import { Anchor } from '../../styles/GlobalStyles';

import spcxLogo from '../../assets/spcx-logo.png';

function Header() {
  return (
    <Container>
      <div>
        <Anchor to='/'>
          <h1>My <Logo src={spcxLogo} /> Console</h1>
        </Anchor>
      </div>

      <div>
        <nav>
          <Anchor to='/launches'>Launches</Anchor>
        </nav>
      </div>
    </Container>
  );
}

export default Header;