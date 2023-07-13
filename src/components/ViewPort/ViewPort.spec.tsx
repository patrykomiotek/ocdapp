// jest
jest.mock('@hooks/useViewPort', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('@hooks/useViewport');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    // useViewport: jest.fn().mockImplementation(() => ({ width: 12, height: 24 })),
    useViewport: jest.fn(),
    ...originalModule,
  }
});

import { render, screen } from '@testing-library/react';
import { ViewPort } from './ViewPort';
import { useViewport } from '@hooks/useViewPort';

// jest
const mockedUseViewPort = useViewport as jest.Mock;

describe('ViewPort component', () => {
  it('should display values from hook', () => {
    // jest
    mockedUseViewPort.mockImplementationOnce(() => ({ width: 12, height: 24 }));
    render(<ViewPort />);

    expect(screen.getByText(/x: 12 y: 24/i));
  });
  it('should display another values from hook', () => {
    // jest
    mockedUseViewPort.mockImplementationOnce(() => ({ width: 25, height: 12 }));
    render(<ViewPort />);

    expect(screen.getByText(/x: 25 y: 12/i));
  });
});
