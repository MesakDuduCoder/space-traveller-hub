import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelMission, joinMission } from '../redux/mission/missionSlice';

const MissionItem = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const member = reserved === true
    ? {
      variant: 'outline-danger', buttonName: 'leave mission', memberStatus: 'Active Member', memberBg: 'description-item blue',
    }
    : {
      variant: 'outline-secondary', buttonName: 'join mission', memberStatus: 'Not A Member', memberBg: 'description-item',
    };
  const clickHandler = (id) => (
    reserved === true ? dispatch(cancelMission(id)) : dispatch((joinMission(id))));
  return (
    <>
      <td>{name}</td>
      <td>{description}</td>
      <td className="flex">
        <p data-testid="activeMember" className={member.memberBg}>
          {member.memberStatus}
        </p>
      </td>
      <td className="flex">
        <Button
          data-testid="joinMission"
          variant={member.variant}
          onClick={() => clickHandler(id)}
          className="btn"
        >
          {member.buttonName}
        </Button>
      </td>
    </>
  );
};

MissionItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
};
MissionItem.defaultProps = {
  name: null,
  description: null,
  id: null,
  reserved: false,
};

export default MissionItem;
