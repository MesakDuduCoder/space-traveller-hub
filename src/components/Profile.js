import React from 'react';
import { useSelector } from 'react-redux';
import '../css/profile.css';

function Profile() {
  const { rockets } = useSelector((store) => store.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const { missions } = useSelector((store) => store.mission);
  const joinedMission = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="myProfile">
      <ul className="myRockets">
        <h2>My Missions</h2>
        {joinedMission.length > 0
          ? joinedMission.map((mission) => (
            <li key={mission.id}>
              <h3>{mission.name}</h3>
            </li>
          ))
          : <li>No reserved mission</li>}
      </ul>
      <ul className="myRockets">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0
          ? reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              <h3>{rocket.name}</h3>
            </li>
          ))
          : <li>No reserved rockets</li>}
      </ul>
    </div>
  );
}

export default Profile;
