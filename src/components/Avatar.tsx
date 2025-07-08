import React from 'react';
import clsx from 'clsx';

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  fallback?: React.ReactNode;
};

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40, className, fallback }) => (
  <div
    className={clsx(
      'inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden',
      className,
    )}
    style={{ width: size, height: size }}
  >
    {src ? (
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    ) : (
      fallback || <span className="text-gray-500">?</span>
    )}
  </div>
); 