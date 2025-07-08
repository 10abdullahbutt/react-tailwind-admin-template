import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '../Loader';
import '@testing-library/jest-dom';

describe('Loader', () => {
  it('renders spinner', () => {
    const { container } = render(<Loader />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies size', () => {
    const { container } = render(<Loader size={40} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '40');
    expect(svg).toHaveAttribute('height', '40');
  });
}); 