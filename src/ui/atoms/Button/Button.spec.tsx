import { screen, render } from '@testing-library/react';
import { axe } from 'jest-axe';
// import { axe } from 'vitest-axe';

import { Button } from './Button';

describe('Button component', () => {
  it('is not so useful test', () => {
    // the line below is only needed when callbacks are necessary
    // and we don't need to provide logic to them
    const onClick = vi.fn();
    render(<Button label="Click me" onClick={onClick} />);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  })

  it('to have no violations', async () => {
    const { container } = render(<Button label="Click me" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  })
});