import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Missions from '../components/Missions';

describe('Missions Component', () => {
  test('take snapshot of mission', () => {
    const { missions } = render(
      <BrowserRouter>
        <Missions />
      </BrowserRouter>,
    );
    expect(missions).toMatchSnapshot();
  });
});
