import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

afterEach(() => {
  cleanup();
});

describe('App', () => {
  it('renders the store heading', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Featured Products' })
    ).toBeInTheDocument();
  });

  it('displays all three products', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Smart Watch')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
  });

  it('starts with an empty cart', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Your cart is empty/i)
    ).toBeInTheDocument();
  });

  it('adds a product to the cart', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const addButtons = screen.getAllByRole('button', {
      name: /Add to Cart/i,
    });

    fireEvent.click(addButtons[0]);

    expect(
      screen.getByRole('heading', { name: 'Cart Total: $79.99' })
    ).toBeInTheDocument();
  });

  it('removes a product from the cart', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const addButtons = screen.getAllByRole('button', {
      name: /Add to Cart/i,
    });

    fireEvent.click(addButtons[0]);

    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));

    expect(
      screen.getByText(/Your cart is empty/i)
    ).toBeInTheDocument();
  });

  it('calculates the total for multiple products', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const addButtons = screen.getAllByRole('button', {
      name: /Add to Cart/i,
    });

    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);

    expect(
      screen.getByRole('heading', { name: 'Cart Total: $209.98' })
    ).toBeInTheDocument();
  });
});