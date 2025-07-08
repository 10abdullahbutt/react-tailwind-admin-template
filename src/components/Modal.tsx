import React from 'react';
import clsx from 'clsx';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, className }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className={clsx("bg-white rounded shadow-lg z-10 p-6 w-full max-w-md", className)}>
        {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
        {children}
        <button className="mt-4 px-4 py-2 bg-gray-200 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}; 