import { render, screen, fireEvent } from '@testing-library/react';
import { AuthCredentials } from './AuthCredentials';

describe('AuthCredentials', () => {
  it('should change display value', () => {
    render(<AuthCredentials />);

    expect(screen.getByText(/is user logged\? no/i));

    fireEvent.click(screen.getByRole('button', { name: /change value/i }));

    screen.debug();
  })
});