import React, { useId } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

type Option = { label: string; value: string };
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: Option[];
  id?: string;
};

export const Select: React.FC<SelectProps> = ({ label, error, options, className, id, ...props }) => {
  const autoId = useId();
  const selectId = id || autoId;
  return (
    <div className="mb-4">
      {label && <label htmlFor={selectId} className="block mb-1 font-medium">{label}</label>}
      <select
        id={selectId}
        className={clsx(
          'w-full px-3 py-2 border rounded focus:outline-none focus:ring',
          error ? 'border-red-500' : 'border-gray-300',
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
}; 