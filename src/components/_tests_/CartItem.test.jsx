
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import CartItem from '../CartItem';

afterEach(() => {
  cleanup();
});

describe('CartItem', () => {
  const product = {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: '/headphones.jpg',
  };

  it('renders the product name', () => {
    render(<CartItem product={product} onRemove={vi.fn()} />);

    expect(
      screen.getByRole('heading', { name: 'Wireless Headphones' })
    ).toBeInTheDocument();
  });

  it('displays the product price', () => {
    render(<CartItem product={product} onRemove={vi.fn()} />);

    expect(screen.getByText('$79.99')).toBeInTheDocument();
  });

  it('displays the product image', () => {
    render(<CartItem product={product} onRemove={vi.fn()} />);

    expect(
      screen.getByRole('img', { name: 'Wireless Headphones' })
    ).toHaveAttribute('src', '/headphones.jpg');
  });

  it('displays the Remove button', () => {
    render(<CartItem product={product} onRemove={vi.fn()} />);

    expect(
      screen.getByRole('button', { name: 'Remove' })
    ).toBeInTheDocument();
  });

  it('calls onRemove when Remove is clicked', () => {
    const onRemove = vi.fn();

    render(<CartItem product={product} onRemove={onRemove} />);

    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));

    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
