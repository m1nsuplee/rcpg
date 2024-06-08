import { render, fireEvent } from '@testing-library/react';
import { Disclosure } from './disclosure';
import { describe, expect, it } from 'vitest';

describe('Disclosure', () => {
  it(`<Disclosure.Button>을 클릭하면 <Disclosure.Panel>의 hidden 속성이 토글된다.`, () => {
    const { getByText } = render(
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
      </Disclosure>,
    );

    const button = getByText('무엇이 있을까요?⬇️');
    const panel = getByText('짠!');

    expect(panel.hidden).toBe(true);

    fireEvent.click(button);
    expect(panel.hidden).toBe(false);

    fireEvent.click(button);
    fireEvent.click(button);
    expect(panel.hidden).toBe(false);
  });
});
