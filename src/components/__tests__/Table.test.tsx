import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, Column } from '../Table';
import '@testing-library/jest-dom';

type Row = { name: string; age: number };

describe('Table', () => {
  const columns: Column<Row>[] = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
  ];
  const data: Row[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
  ];

  it('renders columns and data', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
  });
}); 