import { vi } from 'vitest';

// jest.mock('@hooks/useViewport', () => {
//   const originalModule = jest.requireActual('@hooks/useViewport');
//   return {
//     ...originalModule,
//     useViewport: jest.fn(),
//   }
// });

// vite version
vi.mock('@hooks/useViewPort', () => ({
  useViewport: vi.fn(),
  // useViewport: vi.fn().mockImplementation(() => ({ width: 10, height: 20 })),
}));

// jest version
// jest.mock('@hooks/useViewPort', () => {
//   useViewport: jest.fn(),
//   // useViewport: jest.fn().mockImplementation(() => ({ width: 10, height: 20 })),
// });

import { render, screen } from '@testing-library/react';

import { useViewport } from '@hooks/useViewPort';
import { ViewPort } from './ViewPort';

// jest version
// const mockedUseViewport = useViewport as vi;

describe('<Viewport /> component with mocked hook per test', () => {
  it('should display values from mocked hook', () => {
    // jest version
    // mockedUseViewport.mockImplementationOnce(() => ({ width: 14, height: 15 }));
    vi.mocked(useViewport).mockImplementationOnce(() => ({ width: 14, height: 15 }));

    render(<ViewPort />);
    expect(screen.getByText(/x: 14 y: 15/i)).toBeInTheDocument();
  });

  it('should display values from mocked hook ver 2', () => {
    // jest version
    // mockedUseViewport.mockImplementationOnce(() => ({ x: 22, y: 23 }));
    vi.mocked(useViewport).mockImplementationOnce(() => ({ width: 22, height: 23 }));
    render(<ViewPort />);
    screen.debug();
    expect(screen.getByText(/x: 22 y: 23/i)).toBeInTheDocument();
  });
});