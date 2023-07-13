import { render, screen } from '@testing-library/react';
import { Generator } from '.';
import { fireEvent } from '@storybook/testing-library';

describe('Generator component', () => {
  it('should change value after click', async () => {
    render(<Generator />);

    // screen.getByTestId('uuid-para')
    const uuid = screen.getByText(/[a-zA-Z0-9-]{36}/i).textContent;

    fireEvent.click(screen.getByRole('button', { name: /regenerate/i}));

    const newUuid = (await screen.findByText(/[a-zA-Z0-9-]{36}/i)).textContent;

    expect(uuid).not.toEqual(newUuid);

  });
});