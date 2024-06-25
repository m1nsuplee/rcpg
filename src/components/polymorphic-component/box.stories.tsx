import { Meta, StoryObj } from '@storybook/react';
import { Box } from './box';

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box>
      <p>Box</p>
    </Box>
  ),
};

export const Button: Story = {
  render: () => (
    <Box
      as="button"
      asProps={{
        type: 'button',
        onClick: () => alert('Button clicked'),
      }}
    >
      <p>Button</p>
    </Box>
  ),
};

export const Link: Story = {
  render: () => (
    <Box
      as="a"
      asProps={{
        href: 'https://example.com',
      }}
    >
      <p>Link</p>
    </Box>
  ),
};
