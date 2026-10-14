import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';

afterEach(() => {
  cleanup();
});

describe('ProductCard', () => {
  const product = {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: '/headphones.jpg',
    description: 'High-quality wireless headphones',
  };

  it('renders the product name', () => {
    render(
      <MemoryRouter>
        <ProductCard {...product} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Wireless Headphones' })
    ).toBeInTheDocument();
  });

  it('displays the product price and description', () => {
    render(
      <MemoryRouter>
        <ProductCard {...product} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByText('$79.99')).toBeInTheDocument();
    expect(
      screen.getByText('High-quality wireless headphones')
    ).toBeInTheDocument();
  });

  it('displays the product image', () => {
    render(
      <MemoryRouter>
        <ProductCard {...product} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('img', { name: 'Wireless Headphones' })
    ).toHaveAttribute('src', '/headphones.jpg');
  });

  it('calls onAddToCart when Add to Cart is clicked', () => {
    const onAddToCart = vi.fn();

    render(
      <MemoryRouter>
        <ProductCard {...product} onAddToCart={onAddToCart} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });

  it('links to the correct product details page', () => {
    render(
      <MemoryRouter>
        <ProductCard {...product} onAddToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('link', { name: 'View Details' })
    ).toHaveAttribute('href', '/products/1');
  });
});
