import clsx from 'classnames'

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300'
  const variants = {
    primary: 'bg-primary text-dark hover:bg-secondary',
    secondary: 'bg-secondary text-dark hover:bg-primary',
    outline: 'border border-light text-light hover:bg-light hover:text-dark',
  }

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
