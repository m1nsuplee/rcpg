import { Meta, StoryObj } from '@storybook/react';
import { Disclosure } from './disclosure';

const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
};

export default meta;

type Story = StoryObj<typeof Disclosure>;

export const Open: Story = {
  render: () => (
    <Disclosure>
      {({ isOpen }) => (
        <>
          <Disclosure.Button>
            무엇이 있을까요?
            {isOpen ? '⬆️' : '⬇️'}
          </Disclosure.Button>
          <Disclosure.Panel>짠!</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ),
};
