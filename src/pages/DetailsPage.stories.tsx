import type { Meta, StoryObj } from '@storybook/react';

import { DetailsPage } from './DetailsPage';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

const meta = {
  title: 'Pages/DetailsPage',
  component: DetailsPage,
} satisfies Meta<typeof DetailsPage>;

export default meta;
// type Story = StoryObj<typeof meta>;

export const _DetailsPage = () => (
  <MemoryRouter initialEntries={["/details/14"]}>
    <Routes>
      <Route path="details/:foo" element={<DetailsPage />} />
    </Routes>
  </MemoryRouter>
);
