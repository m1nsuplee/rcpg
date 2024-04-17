import { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const W16H9: Story = {
  render: () => (
    <div
      id="container"
      style={{
        width: '300px',
      }}
    >
      <AspectRatio
        ratio={16 / 9}
        style={{
          backgroundColor: 'lightcoral',
        }}
      />
    </div>
  ),
};

export const W4H3: Story = {
  render: () => (
    <div
      id="container"
      style={{
        width: '300px',
      }}
    >
      <AspectRatio
        ratio={4 / 3}
        style={{
          backgroundColor: 'lightcoral',
        }}
      />
    </div>
  ),
};

export const W1H1: Story = {
  render: () => (
    <div
      id="container"
      style={{
        width: '300px',
      }}
    >
      <AspectRatio
        ratio={1}
        style={{
          backgroundColor: 'lightcoral',
        }}
      />
    </div>
  ),
};

export const W3H4: Story = {
  render: () => (
    <div
      id="container"
      style={{
        width: '300px',
      }}
    >
      <AspectRatio
        ratio={3 / 4}
        style={{
          backgroundColor: 'lightcoral',
        }}
      />
    </div>
  ),
};

export const W9H16: Story = {
  render: () => (
    <div
      id="container"
      style={{
        width: '300px',
      }}
    >
      <AspectRatio
        ratio={9 / 16}
        style={{
          backgroundColor: 'lightcoral',
        }}
      />
    </div>
  ),
};
