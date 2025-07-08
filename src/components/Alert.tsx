import React from 'react';
import clsx from 'clsx';

type AlertProps = {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  className?: string;
};

const typeStyles = {
  success: 'bg-green-100 text-green-800 border-green-300',
  error: 'bg-red-100 text-red-800 border-red-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  info: 'bg-blue-100 text-blue-800 border-blue-300',
};

export const Alert: React.FC<AlertProps> = ({ type = 'info', message, className }) => (
  <div
    className={clsx(
      'border-l-4 p-4 rounded mb-4',
      typeStyles[type],
      className,
    )}
    role="alert"
  >
    {message}
  </div>
); 