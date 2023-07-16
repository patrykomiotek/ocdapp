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
// import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { CreateProductPage } from './CreateProductPage';

describe('CreateProductPage component', () => {
  it('should validate form, create product and navigate to the new page', async () => {
    // 0️⃣ version with userEvent
    // version with userEvent
    // const user = userEvent.setup();

    // 1️⃣ render component
    render(
      <MemoryRouter initialEntries={['/products/create']}>
        <Routes>
          <Route path="/products/create" element={<CreateProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    // 2️⃣ click send button - validation should take place
    fireEvent.click(screen.getByRole('button'));
    // version with userEvent
    // await user.click(screen.getByRole('button'));

    // 3️⃣ validation error should appear
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();

    // 4️⃣ fill all fields
    // TODO: we can write wrapper similar to userEvent:
    // type(element, value) => fireEvent.change(element, { target: { value }})
    fireEvent.change(
      screen.getByRole('textbox', { name: /name/i }),
      { target: { value: 'Product 1' }}
    );
    fireEvent.change(
      screen.getByRole('textbox', { name: /description/i }),
      { target: { value: 'Lorem ipsum' }}
    );
    fireEvent.change(
      screen.getByRole('spinbutton', { name: /price/i }),
      { target: { value: 123 }}
    );

    

    // version with userEvent
    // await user.type(screen.getByRole('textbox', { name: /name/i }), 'Product 1');
    // await user.type(screen.getByRole('textbox', { name: /description/i }), 'Lorem ipsum');
    // await user.type(screen.getByRole('spinbutton', { name: /price/i }), '1234');

    // 5️⃣ send form
    // we're using wait for to make sure that "clicking" was finished
    // component updated it's state and is ready to get mocked data and make redirect
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button'));
    });
    // version with userEvent
    // await user.click(screen.getByRole('button'));

    // 6️⃣ validation error should not appear - take note we used queryByText
    // because getByText or findByText will throw an error when element desn't exits
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();


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