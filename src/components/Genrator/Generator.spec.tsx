import { render, screen, waitFor } from '@testing-library/react';
import { Generator } from '.';
import { fireEvent } from '@storybook/testing-library';

describe('Generator component', () => {
  it('should change value after click', async () => {
    render(<Generator />);

    // screen.getByTestId('uuid-para')
    const uuid = screen.getByText(/[a-z0-9-]{36}/).textContent;

    // await userEvent.click(screen.getByRole('button', { name: 'Refresh' }));
    fireEvent.click(screen.getByRole('button', { name: /regenerate/i }));

    await waitFor(() => {
      expect(screen.getByText(/[a-z0-9-]{36}/)).toBeInTheDocument();
    });

    const uuidChanged = (await screen.findByText(/[a-z0-9-]{36}/)).textContent;

    expect(uuid).not.toBe(uuidChanged);

  });
});