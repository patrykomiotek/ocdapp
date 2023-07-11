import type { Meta } from '@storybook/react';

import { Generator } from './Generator';

const meta = {
  title: 'Components/Generator',
  component: Generator,
  tags: ['autodocs'],
} satisfies Meta<typeof Generator>;

export default meta;

export const _Generator = () => <Generator />
