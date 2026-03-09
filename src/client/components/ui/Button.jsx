import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-700 active:bg-primary-600',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-gray-200 active:bg-gray-300',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10 active:bg-primary/20',
    accent: 'bg-accent text-accent-foreground hover:bg-orange-600 active:bg-orange-700',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-red-700 active:bg-red-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2.5 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };

  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { scale: 0.98 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {isLoading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </motion.button>
  );
};
