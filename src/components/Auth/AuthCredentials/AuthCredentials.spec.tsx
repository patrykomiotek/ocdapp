import { render, screen, fireEvent } from '@testing-library/react';
import { AuthCredentials } from './AuthCredentials';
import { AuthProvider } from '../AuthContext';

describe('AuthCredentials', () => {
  it('should change display value', () => {
    render(<AuthProvider><AuthCredentials /></AuthProvider>);

    expect(screen.getByText(/is user logged\? no/i));

    fireEvent.click(screen.getByRole('button', { name: /change value/i }));

    expect(screen.getByText(/is user logged\? yes/i));
  })
});