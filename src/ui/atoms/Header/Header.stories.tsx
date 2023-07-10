import type { Meta } from '@storybook/react';

import { Header } from './Header';

const meta = {
  title: 'UI/Atoms/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

export const _Header = () => <Header>Today is payday</Header>;
