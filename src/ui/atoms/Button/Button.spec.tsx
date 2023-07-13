import { screen, render } from '@testing-library/react';
import { Button } from './Button';
// import { axe } from 'jest-axe';
import { axe } from 'vitest-axe';

describe('Button component', () => {
  it('is not so useful test', () => {
    render(<Button label="Click me" />);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  })

  it('to have no violations', async () => {
    const { container } = render(<Button label="Click me" />);
    const results = await axe(container);

    // expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    expect(results).toHaveNoViolations();
  })
});