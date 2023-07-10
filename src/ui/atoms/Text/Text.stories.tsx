import type { Meta } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'UI/Atoms/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

export const _Text = () => <Text>Today is payday</Text>;
