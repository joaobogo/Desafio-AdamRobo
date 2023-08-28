import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tudo o que você precisa, em um só lugar/i);
  expect(linkElement).toBeInTheDocument();
});
