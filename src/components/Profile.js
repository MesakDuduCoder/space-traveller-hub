import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import '../css/profile.css';

function Profile() {
  const { missions } = useSelector((store) => store.mission);
  const joinedMission = missions.filter((mission) => mission.reserved === true);
  console.log(joinedMission);
  return (
    <>
      <div className="profile-container">
        <div className="missions">
          <h1>My Missions</h1>
          <Row>
            {joinedMission.map((mission) => <Col key={mission.id}>{mission.name}</Col>)}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Profile;
