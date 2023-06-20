import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const { rockets, isLoading } = useSelector((store) => store.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  console.log(rockets);

  if (isLoading) {
    return (
      <div>Loading......</div>
    );
  }

  return <div>Rocketss</div>;
}

export default Rockets;
