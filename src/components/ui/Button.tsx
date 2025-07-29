// src/components/ui/Button.tsx
import React from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'base' | 'large'
  className?: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'primary',
  size = 'base',
  className = '',
  children,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-400",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500 disabled:bg-gray-400",
  }

  const sizes = {
    small: "px-3 py-1 text-sm",
    base: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }

  const classes = [
    base,
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
