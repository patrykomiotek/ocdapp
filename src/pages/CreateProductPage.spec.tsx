// import { vi } from 'vitest';

vi.mock('@services/createProduct', () => ({
  createProduct: vi.fn().mockResolvedValue({
    records: [{
      id: 123
    }]
  })
}));

const mockedNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  }
});

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { CreateProductPage } from './CreateProductPage';

describe('CreateProductPage component', () => {
  it('should validate form, create product and navigate to the new page', async () => {
    // version with userEvent
    // const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/products/create']}>
        <Routes>
          <Route path="/products/create" element={<CreateProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));
    // version with userEvent
    // await user.click(screen.getByRole('button'));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();

    await userEvent.type(screen.getByRole('textbox', { name: /name/i }), 'Product 1');
    await userEvent.type(screen.getByRole('textbox', { name: /description/i }), 'Lorem ipsum');
    await userEvent.type(screen.getByRole('spinbutton', { name: /price/i }), '1234');

    // version with userEvent
    // user.type(screen.getByRole('textbox', { name: /name/i }), 'Product ')

    // version with fireEvent
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

    // we're using wait for to make sure that "clicking" was finished
    // component updated it's state and is ready to get mocked data and make redirect
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button'));
    });
    // version with userEvent
    // await user.click(screen.getByRole('button'));

    // TODO: mock createProduct function
    // ☑️ done in at the top of the file

    // TODO: spy if method was called
    // const spy = vi.spyOn(Object, 'method');
    // ☑️ done below without spyOn because we don't have
    // object method but function from hook

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('/products/123');
  })
});