import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../Modal';
import '@testing-library/jest-dom';

describe('Modal', () => {
  it('does not render when closed', () => {
    render(<Modal open={false} onClose={jest.fn()}>Content</Modal>);
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('renders with title and children when open', () => {
    render(<Modal open={true} onClose={jest.fn()} title="My Modal">Modal Content</Modal>);
    expect(screen.getByText('My Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when overlay or button is clicked', () => {
    const onClose = jest.fn();
    render(<Modal open={true} onClose={onClose}>Content</Modal>);
    fireEvent.click(screen.getByText('Close'));
    expect(onClose).toHaveBeenCalled();
  });
}); 