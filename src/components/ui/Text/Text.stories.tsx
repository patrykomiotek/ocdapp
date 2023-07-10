import type { Meta } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

export const _Text = () => <Text>Today is payday</Text>;
