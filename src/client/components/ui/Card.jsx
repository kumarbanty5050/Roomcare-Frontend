import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
  const Wrapper = hoverEffect ? motion.div : 'div';

  return (
    <Wrapper
      whileHover={hoverEffect ? { y: -4, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-6 ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-6 border-b border-gray-200 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg sm:text-xl font-semibold text-gray-900 ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-600 mt-1 ${className}`}>{children}</p>
);
