import { vi } from 'vitest';

// jest.mock('@hooks/useViewport', () => {
//   const originalModule = jest.requireActual('@hooks/useViewport');
//   return {
//     ...originalModule,
//     useViewport: jest.fn(),
//   }
// });

vi.mock('@hooks/useViewPort', () => ({
  useViewport: vi.fn().mockImplementation(() => ({ width: 10, height: 20 })),
  // useViewport: () => ({ x: 10, y: 20 }),
}));

import { render, screen } from '@testing-library/react';

import { useViewport } from '@hooks/useViewPort';
import { ViewPort } from './ViewPort';

// jest.mock('@hooks/useViewport', () => ({
//   useViewport: () => ({ x: 100, y: 200 }),
// }));


// const mockedUseViewport = useViewport as vi.Mock;

describe('<Viewport /> component with mocked hook per test', () => {
  it('should display values from mocked hook', () => {
    const mock = vi.fn().mockImplementationOnce(() => ({ width: 14, height: 15 }));
    render(<ViewPort />);
    expect(screen.getByText(/x: 14 y: 15/i)).toBeInTheDocument();
  });

  it('should display values from mocked hook ver 2', () => {
    // mockedUseViewport.mockImplementationOnce(() => ({ x: 22, y: 22 }));
    const mock = vi.fn().mockImplementationOnce(() => ({ width: 22, height: 22 }));
    render(<ViewPort />);
    screen.debug();
    expect(screen.getByText(/x: 22 y: 22/i)).toBeInTheDocument();
  });
});