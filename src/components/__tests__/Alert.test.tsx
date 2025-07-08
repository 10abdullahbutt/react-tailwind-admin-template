import React from 'react';
import { render, screen } from '@testing-library/react';
import { Alert } from '../Alert';
import '@testing-library/jest-dom';

describe('Alert', () => {
  it('renders message', () => {
    render(<Alert message="Success!" />);
    expect(screen.getByText('Success!')).toBeInTheDocument();
  });

  it('applies type styling', () => {
    render(<Alert message="Error!" type="error" />);
    const alert = screen.getByText('Error!');
    expect(alert).toHaveClass('bg-red-100');
  });
}); 