import { Meta, StoryObj } from '@storybook/react';
import { PolymorphicComponent } from './polymorphic-component';

const meta: Meta<typeof PolymorphicComponent> = {
  component: PolymorphicComponent,
};

export default meta;

type Story = StoryObj<typeof PolymorphicComponent>;

export const Default: Story = {
  render: () => {
    return (
      <PolymorphicComponent>
        <div>Default</div>
      </PolymorphicComponent>
    );
  },
};

export const AsButton: Story = {
  render: () => {
    return (
      <PolymorphicComponent
        as="button"
        onClick={() => alert('Button clicked!')}
      >
        <span>As Button</span>
      </PolymorphicComponent>
    );
  },
};

export const AsAnchor: Story = {
  render: () => {
    return (
      <PolymorphicComponent
        as="a"
        href="https://example.com"
        target="_blank"
      >
        <span>As Anchor</span>
      </PolymorphicComponent>
    );
  },
};

export const AsCustomComponent: Story = {
  render: () => {
    const CustomComponent = ({ children }: { children: React.ReactNode }) => {
      return (
        <div
          style={{
            backgroundColor: 'lightblue',
            padding: '1rem',
          }}
        >
          {children}
        </div>
      );
    };

    return (
      <PolymorphicComponent as={CustomComponent}>
        <span>As Custom Component</span>
      </PolymorphicComponent>
    );
  },
};
