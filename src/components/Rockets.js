import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReserveRocket, reserveRocket } from '../redux/rockets/rocketSlice';
import '../css/rocket.css';

function Rockets() {
  const dispatch = useDispatch();
  const { rockets, isLoading } = useSelector((store) => store.rockets);

  if (isLoading) {
    return (
      <div>Loading......</div>
    );
  }

  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <div className="imageBox">
            <img src={rocket.flickr_images} alt="" className="rocketImage" />
          </div>
          <div className="rocketDetails">
            <h2>{rocket.name}</h2>
            <div>
              {rocket.reserved ? (
                <span className="reserved" data-testid="rocketReserved">
                  Reserved
                </span>
              ) : (
                ''
              )}
              <span>{rocket.description}</span>
            </div>
            {rocket.reserved && (
              <button
                type="button"
                className="cancelRocket"
                onClick={() => dispatch(cancelReserveRocket(rocket.id))}
              >
                Cancel reservation
              </button>
            )}
            {!rocket.reserved && (
              <button
                type="button"
                data-testid="reserveBtn"
                className="reserveRocket"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
