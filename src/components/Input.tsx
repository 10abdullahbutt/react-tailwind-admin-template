import React, { useId } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  id?: string;
};

export const Input: React.FC<InputProps> = ({ label, error, className, id, ...props }) => {
  const autoId = useId();
  const inputId = id || autoId;
  return (
    <div className="mb-4">
      {label && <label htmlFor={inputId} className="block mb-1 font-medium">{label}</label>}
      <input
        id={inputId}
        className={clsx(
          'w-full px-3 py-2 border rounded focus:outline-none focus:ring',
          error ? 'border-red-500' : 'border-gray-300',
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
}; 