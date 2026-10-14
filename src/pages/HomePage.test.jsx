import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import HomePage from './homepage.jsx';

afterEach(() => {
  cleanup();
});

describe('HomePage', () => {
  it('renders the hero title', () => {
    render(<HomePage />);

    expect(
      screen.getByText('Upgrade Your Everyday Tech')
    ).toBeInTheDocument();
  });

  it('renders the hero subtitle', () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Discover quality gadgets designed to make your everyday life easier/i)
    ).toBeInTheDocument();
  });

  it('renders the Why Shop with Us heading', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { name: 'Why Shop with Us?' })
    ).toBeInTheDocument();
  });

  it('renders all three shopping benefits', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: 'Quality Products' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Easy Shopping' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Simple Experience' })).toBeInTheDocument();
  });

  it('renders the shopping introduction', () => {
    render(<HomePage />);

    expect(
      screen.getByText(/At ComponentCorner, we make it easy to find quality technology products/i)
    ).toBeInTheDocument();
  });
});