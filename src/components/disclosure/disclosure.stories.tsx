import { Meta, StoryObj } from '@storybook/react';
import { Disclosure } from './disclosure';

const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
};

export default meta;

type Story = StoryObj<typeof Disclosure>;

export const Example: Story = {
  render: () => {
    return (
      <Disclosure>
        {({ isOpen, toggle, close }) => (
          <div>
            <button onClick={toggle}>toggle</button>
            <button onClick={close}>close</button>
            <p>
              The content is{' '}
              <strong role="status">{isOpen ? 'visible' : 'hidden'}</strong>
            </p>
          </div>
        )}
      </Disclosure>
    );
  },
};
