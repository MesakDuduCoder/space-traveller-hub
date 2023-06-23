import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import MissionItem from './MissionItem';
import '../css/mission.css';

function Missions() {
  const { missions, isLoading } = useSelector((store) => store.mission);
  if (isLoading) {
    return (
      <>
        <div>loading contents ...........</div>
      </>
    );
  }

  return (
    <div className="container">
      <Table striped bordered className="Table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className="status">Status</th>
            <th className="status"> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <MissionItem
                id={mission.id}
                name={mission.name}
                description={mission.description}
                reserved={mission.reserved}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
