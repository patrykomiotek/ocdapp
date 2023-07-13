import { vi } from 'vitest';

vi.mock('@services/createProduct', () => ({
  createProduct: vi.fn().mockResolvedValue(() => ({
    records: [{
      id: 123
    }]
  }))
}));

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { CreateProductPage } from './CreateProductPage';
import { fireEvent } from '@storybook/testing-library';
import { useNavigate } from "react-router-dom";

describe('CreateProductPage component', () => {
  it('should validate form, create product and display new product', async () => {
    render(
      <MemoryRouter initialEntries={['/products/create']}>
        <Routes>
          <Route path="/products/create" element={<CreateProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });

    // userEvent.click(screen.getByRole('textbox', { name: /name/i }))
    // userEvent.type(screen.getByRole('textbox', { name: /name/i }), 'text')

    await userEvent.type(screen.getByRole('textbox', { name: /name/i }), 'Product 1');
    await userEvent.type(screen.getByRole('textbox', { name: /description/i }), 'Lorem ipsum');
    await userEvent.type(screen.getByRole('spinbutton', { name: /price/i }), '1234');

    // fireEvent.change(
    //   screen.getByRole('textbox', { name: /name/i }),
    //   {target: { value: 'Product 1'}}
    // );
    // fireEvent.change(
    //   screen.getByRole('textbox', { name: /description/i }),
    //   {target: { value: 'Lorem ipsum'}}
    // );
    // fireEvent.change(
    //   screen.getByRole('spinbutton', { name: /price/i }),
    //   {target: { value: 123 }}
    // );

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });

    // TODO: ☑️ mock createProduct function

    // TODO: 
    const spy = vi.spyOn(useNavigate, 'navigate');

    // expect(spy).toHaveBeenCalled();
    // expect(spy).toHaveBeenCalledWith('/product/123');
    expect(spy).toHaveBeenCalledTimes(1);

    // TODO: mock product details

    screen.debug();
  })
});