import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

it('renders correctly', () => {
  const header = renderer
    .create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    .toJSON();
  expect(header).toMatchSnapshot();
});
