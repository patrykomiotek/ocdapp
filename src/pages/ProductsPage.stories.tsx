import type { Meta } from '@storybook/react';

import { ProductsPage } from './ProductsPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const meta = {
  title: 'Pages/ProductsPage',
  component: ProductsPage,
} satisfies Meta<typeof ProductsPage>;

export default meta;
// type Story = StoryObj<typeof meta>;

export const _ProductsPage = () => (
  <MemoryRouter initialEntries={["/products"]}>
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  </MemoryRouter>
);
