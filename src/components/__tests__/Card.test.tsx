import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('renders header, children, and footer', () => {
    render(
      <Card header="Header" footer="Footer">
        Body
      </Card>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
}); 