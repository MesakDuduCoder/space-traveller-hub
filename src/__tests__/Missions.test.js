import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MissionItem from '../components/MissionItem';
import store from '../redux/store';

describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionItem />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
