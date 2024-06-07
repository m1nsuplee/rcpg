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
        {({ isOpen, toggle }) => (
          <section>
            <div>
              <span
                style={{
                  marginRight: '0.5rem',
                }}
              >
                무엇이 있을까요?
              </span>
              <button
                type="button"
                onClick={toggle}
              >
                {isOpen ? '⬆️' : '⬇️'}
              </button>
            </div>
            {isOpen ? (
              <article>
                <p>짠!</p>
              </article>
            ) : null}
          </section>
        )}
      </Disclosure>
    );
  },
};
