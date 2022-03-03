/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, cleanup } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { Header } from '../Header';

afterEach(() => {
  cleanup();
});

test('Should render Header component', () => {
  render(<Header />);
  const headerElement = screen.getByTestId('component-header');

  // Type issue that will be fixed
  (expect(headerElement) as any).toBeInTheDocument();
});
