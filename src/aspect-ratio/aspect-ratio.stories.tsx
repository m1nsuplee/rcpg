import { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const W16H9: Story = {
  render: () => (
    <AspectRatio
      width={300}
      ratio={16 / 9}
      style={{
        backgroundColor: 'lightcoral',
      }}
    />
  ),
};

export const W4H3: Story = {
  render: () => (
    <AspectRatio
      width={300}
      ratio={4 / 3}
      style={{
        backgroundColor: 'lightcoral',
      }}
    />
  ),
};

export const W1H1: Story = {
  render: () => (
    <AspectRatio
      width={300}
      ratio={1}
      style={{
        backgroundColor: 'lightcoral',
      }}
    />
  ),
};

export const W3H4: Story = {
  render: () => (
    <AspectRatio
      width={300}
      ratio={3 / 4}
      style={{
        backgroundColor: 'lightcoral',
      }}
    />
  ),
};

export const W9H16: Story = {
  render: () => (
    <AspectRatio
      width={300}
      ratio={9 / 16}
      style={{
        backgroundColor: 'lightcoral',
      }}
    />
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <AspectRatio
      as="button"
      width={300}
      ratio={16 / 9}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>Click me</span>
    </AspectRatio>
  ),
};
