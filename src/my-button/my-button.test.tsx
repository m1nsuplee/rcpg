import { MyButton } from './my-button';
import { describe, expect, it } from 'vitest';

describe('MyButton', () => {
  it('should render', () => {
    expect(<MyButton>Hello World</MyButton>).toMatchSnapshot();
  });
});
