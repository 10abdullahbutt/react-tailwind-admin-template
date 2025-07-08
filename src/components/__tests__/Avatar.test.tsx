import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../Avatar';
import '@testing-library/jest-dom';

describe('Avatar', () => {
  it('renders image when src is provided', () => {
    render(<Avatar src="avatar.png" alt="avatar" />);
    expect(screen.getByAltText('avatar')).toBeInTheDocument();
  });

  it('renders fallback when no src', () => {
    render(<Avatar />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('applies size', () => {
    render(<Avatar size={50} />);
    const avatar = screen.getByText('?').parentElement;
    expect(avatar).toHaveStyle('width: 50px');
    expect(avatar).toHaveStyle('height: 50px');
  });
}); 