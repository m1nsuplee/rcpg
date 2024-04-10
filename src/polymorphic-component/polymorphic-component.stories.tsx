import { Meta, StoryObj } from '@storybook/react';
import { PolymorphicComponent } from './polymorphic-component';

const meta = {
  title: 'PolymorphicComponent',
  component: PolymorphicComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      defaultValue: 'span',
    },
    children: {
      defaultValue: 'Hello, World!',
    },
  },
} satisfies Meta<typeof PolymorphicComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'i am a span',
    as: 'span',
  },
};
