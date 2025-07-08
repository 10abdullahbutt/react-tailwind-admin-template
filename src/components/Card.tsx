import React from 'react';
import clsx from 'clsx';

type CardProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ header, footer, children, className }) => (
  <div className={clsx('bg-white rounded shadow p-6', className)}>
    {header && <div className="mb-4 font-semibold text-lg">{header}</div>}
    <div>{children}</div>
    {footer && <div className="mt-4">{footer}</div>}
  </div>
); 