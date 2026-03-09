export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-primary/10 text-primary',
    secondary: 'bg-gray-100 text-gray-700',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    destructive: 'bg-destructive/10 text-destructive',
    accent: 'bg-accent/10 text-accent',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export const StatusBadge = ({ status, label }) => {
  const statusConfig = {
    paid: {
      bg: 'bg-success/10',
      text: 'text-success',
      icon: '✓',
    },
    due: {
      bg: 'bg-warning/10',
      text: 'text-warning',
      icon: '!',
    },
    overdue: {
      bg: 'bg-destructive/10',
      text: 'text-destructive',
      icon: '!',
    },
    active: {
      bg: 'bg-success/10',
      text: 'text-success',
      icon: '✓',
    },
    completed: {
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      icon: '✓',
    },
    cancelled: {
      bg: 'bg-destructive/10',
      text: 'text-destructive',
      icon: '✕',
    },
    open: {
      bg: 'bg-primary/10',
      text: 'text-primary',
      icon: '◯',
    },
    in_progress: {
      bg: 'bg-primary/10',
      text: 'text-primary',
      icon: '→',
    },
    resolved: {
      bg: 'bg-success/10',
      text: 'text-success',
      icon: '✓',
    },
  };

  const config = statusConfig[status] || statusConfig.default;

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${config.bg} ${config.text} text-sm font-semibold`}>
      <span className="text-xs">{config.icon}</span>
      <span>{label || status}</span>
    </div>
  );
};
