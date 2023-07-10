import type { Meta } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Text>;

export default meta;

export const _Text = () => <Button label="" bgColor="" color="" />;
