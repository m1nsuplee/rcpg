import { PolymorphicComponent } from './polymorphic-component';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('PolymorphicComponent', () => {
  it('renders a span by default', () => {
    render(<PolymorphicComponent>hello, world!</PolymorphicComponent>);
    expect(screen.getByText('hello, world!').tagName).toBe('SPAN');
  });

  it('renders a div when as="div"', () => {
    render(<PolymorphicComponent as="div">hello, world!</PolymorphicComponent>);
    expect(screen.getByText('hello, world!').tagName).toBe('DIV');
  });

  it(`as="a" 일 경우, href 속성을 사용할 수 있습니다.`, () => {
    render(
      <PolymorphicComponent
        as="a"
        href="https://example.com"
      >
        hello, world!
      </PolymorphicComponent>,
    );
    expect(screen.getByText('hello, world!').tagName).toBe('A');
    expect(screen.getByText('hello, world!')).toHaveProperty('href');
  });

  it('renders a custom component when as={CustomComponent}', () => {
    const CustomComponent = ({ children }: { children: React.ReactNode }) => (
      <section>{children}</section>
    );
    render(<PolymorphicComponent as={CustomComponent}>hello, world!</PolymorphicComponent>);
    expect(screen.getByText('hello, world!').tagName).toBe('SECTION');
  });
});
