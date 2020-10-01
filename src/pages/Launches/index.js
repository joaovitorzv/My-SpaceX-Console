import React, { useEffect, useState } from 'react';

import { Container, Latest, Upcoming } from './styles';
import { PrimaryButton } from '../../styles/GlobalStyles';

import Header from '../../components/Header';
import LatestLaunches from '../../components/LatestLaunches';
import UpcomingLaunches from '../../components/UpcomingLaunches';

import { api } from '../../services/api';

function Launches() {
  const [latest, setLatest] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    async function getLaunches() {
      const latestResponse = await api.get('/launches/latest');
      const upcomingResponse = await api.get('/launches/upcoming?limit=3');
      const rocketsResponse = await api.get('/rockets');

      setLatest(latestResponse.data);
      setUpcoming(upcomingResponse.data);
      setRockets(rocketsResponse.data);
    }

    getLaunches();
  }, [])

  return (
    <>
      <Container>
        <Header />

        <Latest>
          <LatestLaunches latestLaunch={latest} />

          <div>
            <p>Upcoming launch</p>
            <h2>Starlink mission</h2>
            <PrimaryButton>
              Update
          </PrimaryButton>
          </div>
        </Latest>
      </Container>

      <Upcoming>
        <div className='section-header'>
          <h2>Upcoming launches</h2>
        </div>

        <div className='upcoming-items'>
          {upcoming.map(launch => (
            <UpcomingLaunches key={launch.flight_number} upcomingLaunch={launch} />
          ))}
        </div>

        <div className='rockets-list'>
          {rockets.map(rocket => (
            <div>
              <p>{rocket.rocket_name}</p>
            </div>
          ))}
        </div>

      </Upcoming>
    </>
  );
}

export default Launches;