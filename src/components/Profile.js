import React from 'react';
import { useSelector } from 'react-redux';
import '../css/profile.css'

function Profile() {
  const { rockets } = useSelector((store) => store.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  if (reservedRockets.length>0) {
    return (
      <div className="myProfile">

        <ul className="myRockets">
          <h2>My Rockets</h2>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              <h3>{rocket.name}</h3>
            </li>
          ))}
        </ul>

      </div>
    );
  }

  return (
    <div >
  <h2>asd</h2>
    </div>
  );


}

export default Profile;
