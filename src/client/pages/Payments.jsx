import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge, StatusBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Download, Calendar, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const mockPayments = [
  {
    id: 1,
    month: 'February 2024',
    date: '2024-02-01',
    amount: 15000,
    status: 'paid',
    transactionId: 'TXN20240201001',
  },
  {
    id: 2,
    month: 'January 2024',
    date: '2024-01-01',
    amount: 15000,
    status: 'paid',
    transactionId: 'TXN20240101001',
  },
  {
    id: 3,
    month: 'December 2023',
    date: '2023-12-05',
    amount: 15000,
    status: 'paid',
    transactionId: 'TXN20231205001',
  },
  {
    id: 4,
    month: 'November 2023',
    date: '2023-11-15',
    amount: 15000,
    status: 'paid',
    transactionId: 'TXN20231115001',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Payments = () => {
  const totalPaid = mockPayments.reduce((sum, p) => sum + p.amount, 0);
  const averagePayment = totalPaid / mockPayments.length;

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Payments & Rent</h2>
          <p className="text-gray-600">View your payment history and manage rent payments</p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm text-gray-600 mb-2">Total Paid</p>
              <p className="text-2xl sm:text-3xl font-bold text-primary">₹{totalPaid.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">{mockPayments.length} payments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm text-gray-600 mb-2">Monthly Rent</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">₹15,000</p>
              <p className="text-xs text-gray-500 mt-1">Fixed amount</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm text-gray-600 mb-2">Status</p>
              <StatusBadge status="paid" label="All Paid" />
              <p className="text-xs text-gray-500 mt-2">Up to date</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Current Payment Status */}
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Month Payment</h3>
          <Card hoverEffect>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>March 2024</CardTitle>
                  <CardDescription>Due on March 1, 2024</CardDescription>
                </div>
                <Badge variant="success">Due in 7 days</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                  <p className="font-semibold text-gray-900">Monthly Rent</p>
                  <p className="text-sm text-gray-600">Room 401 - Green Tower</p>
                </div>
                <p className="text-lg font-bold text-gray-900">₹15,000</p>
              </div>
              <Button fullWidth variant="accent" size="lg">
                <CreditCard size={18} />
                Pay Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment History */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Payment History</h3>
          </div>
          <div className="space-y-2">
            {mockPayments.map((payment) => (
              <div key={payment.id}>
                <Card hoverEffect className="cursor-pointer hover:shadow-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-success/10 rounded-lg">
                            <CreditCard size={16} className="text-success" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{payment.month}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(payment.date).toLocaleDateString('en-IN', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="font-bold text-gray-900">₹{payment.amount.toLocaleString()}</p>
                          <StatusBadge status="paid" label="Paid" />
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:flex">
                          <Download size={18} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500">Transaction ID: {payment.transactionId}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Payments;
