import type { Meta, StoryObj } from '@storybook/react';

import { ProductDetailsPage } from './ProductDetailsPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { rest } from 'msw';

const meta = {
  title: 'Pages/ProductDetailsPage',
  component: ProductDetailsPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/products/123"]}>
        <Routes>
          <Route path="/products/123" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ]
} satisfies Meta<typeof ProductDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const API_URL = 'https://api.airtable.com/v0/appPyGC48mGbBsYNq/products/:id';

export const _ProductsPageWithSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(API_URL, (_req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              id: '123',
              fields: {
                name: 'Nowy produkt',
                description: 'opis produktu'
              }
            })
          );
        })
      ]
    }
  }
};

export const _ProductsPageWith500: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(API_URL, (_req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({})
          );
        })
      ]
    }
  }
};

export const _ProductsPageWithEmptyData: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(API_URL, (_req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({})
          );
        })
      ]
    }
  }
};
