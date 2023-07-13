import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import * as axeMatchers from 'vitest-axe/matchers';
import { server } from './mocks/server'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

expect.extend(axeMatchers);

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
