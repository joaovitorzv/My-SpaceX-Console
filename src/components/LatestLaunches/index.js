import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function LatestLaunches({ latestLaunch }) {

  return (
    <Container>

      <p>Latest launch</p>

      {latestLaunch.rocket ? (
        <>
          <ul>
            <li>Flight number
              <span>{latestLaunch.flight_number}</span>
            </li>

            <li>Launch year
              <span>{latestLaunch.launch_year}</span>
            </li>

            <li>Mission name
              <span>{latestLaunch.mission_name}</span>
            </li>

            <li>Rocket name
              <span>{latestLaunch.rocket.rocket_name}</span>
            </li>
          </ul>


        </>
      ) : (
          <p>Loading...</p>
        )}

    </Container>
  );
}

export default LatestLaunches;