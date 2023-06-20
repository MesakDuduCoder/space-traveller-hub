import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { fetchMission } from '../redux/mission/missionSlice';
import '../css/mission.css';

function Missions() {
  const { missions, isLoading } = useSelector((store) => store.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, []);
  console.log(missions);
  if (isLoading) {
    return (
      <>
        <div>loading contents ...........</div>
      </>
    );
  }

  return (
    <div>
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
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td className="flex"><p className="description-item">Not a member</p></td>
              <td className="flex"><Button variant="outline-secondary" className="btn">Join Mission</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
