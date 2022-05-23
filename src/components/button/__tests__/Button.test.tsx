import { cleanup, render } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { toJSON } = render(<Button />);

    expect(toJSON()).toMatchSnapshot('Button');
  });
});
