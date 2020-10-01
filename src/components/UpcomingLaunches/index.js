import React from 'react';

import { Container, ListInfo } from './styles';

import { formatDate } from '../../utils/index';

function UpcomingLaunches({ upcomingLaunch }) {
  console.log(upcomingLaunch)
  return (
    <Container>
      {upcomingLaunch && (
        <div>
          <h2>{upcomingLaunch.mission_name}</h2>

          <ListInfo>
            <span>flight number</span>
            <p>{upcomingLaunch.flight_number}</p>
          </ListInfo>

          <ListInfo>
            <span>Launch date</span>
            <p>{formatDate(upcomingLaunch.launch_date_local)}</p>
          </ListInfo>

          <ListInfo>
            <span>Rocket name</span>
            <p>{upcomingLaunch.rocket.rocket_name}</p>
          </ListInfo>

          <ListInfo>
            <span>Rocket type</span>
            <p>{upcomingLaunch.rocket.rocket_type}</p>
          </ListInfo>
        </div>
      )}
    </Container>
  );
}

export default UpcomingLaunches;