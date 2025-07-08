import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../Select';
import '@testing-library/jest-dom';

describe('Select', () => {
  const options = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
  ];

  it('renders with label', () => {
    render(<Select label="Number" options={options} />);
    expect(screen.getByLabelText('Number')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Select label="Number" options={options} error="Required" />);
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const onChange = jest.fn();
    render(<Select label="Number" options={options} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('Number'), { target: { value: '2' } });
    expect(onChange).toHaveBeenCalled();
  });
}); 