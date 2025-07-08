import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded font-semibold transition',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        className,
      )}
      {...props}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
}; 