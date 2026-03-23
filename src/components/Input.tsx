import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  touched?: boolean;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  touched,
  helperText,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block font-medium mb-2">{label}</label>}
      <input
        className={`w-full px-3 py-2 border rounded ${
          error && touched ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && touched && <span className="text-red-500 text-sm mt-1">{error}</span>}
      {helperText && !error && <span className="text-gray-500 text-sm mt-1">{helperText}</span>}
    </div>
  );
};

export default Input;