import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchMission } from '../redux/mission/missionSlice';
import MissionItem from './MissionItem';
import '../css/mission.css';

function Missions() {
  const { missions, isLoading } = useSelector((store) => store.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);
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
