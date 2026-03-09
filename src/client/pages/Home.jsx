import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge, StatusBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Clock, MapPin, DoorOpen, AlertCircle, FileText, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const Home = () => {
  const { user, rentStatus, setCurrentTab } = useApp();
  const daysUntilDue = Math.ceil(
    (new Date(rentStatus.nextDueDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name.split(' ')[0]}! 👋
          </h2>
          <p className="text-gray-600">Here's your rental dashboard at a glance</p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3 mb-6">
          {/* Rent Status Card - Spans 2 cols on large */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card hoverEffect className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Rent Payment</CardTitle>
                    <CardDescription>Monthly rent status</CardDescription>
                  </div>
                  <StatusBadge 
                    status={rentStatus.status} 
                    label={
                      rentStatus.status === 'paid' ? 'Paid' :
                      rentStatus.status === 'due' ? 'Due' : 'Overdue'
                    }
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Display */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Monthly Rent</p>
                  <p className="text-4xl font-bold text-gray-900">₹{rentStatus.monthlyRent.toLocaleString()}</p>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Payment Progress</span>
                    <span className="font-semibold text-gray-900">
                      {Math.round((rentStatus.paid / rentStatus.monthlyRent) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(rentStatus.paid / rentStatus.monthlyRent) * 100}%` }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="h-full bg-success rounded-full"
                    />
                  </div>
                </div>

                {/* Due Date */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-primary" />
                    <div>
                      <p className="text-sm text-gray-600">Next Due Date</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(rentStatus.nextDueDate).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                        <span className="text-sm text-gray-600 ml-2">
                          ({daysUntilDue > 0 ? `in ${daysUntilDue} days` : 'Overdue'})
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <Button fullWidth variant="accent" size="lg">
                  Pay Rent Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Room Info Card */}
          <motion.div variants={itemVariants}>
            <Card hoverEffect className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DoorOpen size={20} />
                  Your Room
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Room Number</p>
                  <p className="text-2xl font-bold text-primary">{user.roomNumber}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-1">Property</p>
                  <p className="font-semibold text-gray-900">{user.propertyName}</p>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{user.address}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card hoverEffect className="cursor-pointer hover:shadow-md" onClick={() => setCurrentTab('payments')}>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Plus size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Pay Rent</p>
                  <p className="text-sm text-gray-600">Make payment</p>
                </div>
              </CardContent>
            </Card>

            <Card hoverEffect className="cursor-pointer hover:shadow-md" onClick={() => setCurrentTab('complaints')}>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <AlertCircle size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Raise Issue</p>
                  <p className="text-sm text-gray-600">Report problem</p>
                </div>
              </CardContent>
            </Card>

            <Card hoverEffect className="cursor-pointer hover:shadow-md" onClick={() => setCurrentTab('notices')}>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">View Notices</p>
                  <p className="text-sm text-gray-600">Read announcements</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Last Payment Info */}
        <motion.div variants={itemVariants} className="mt-6">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Last Payment</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(rentStatus.lastPaidDate).toLocaleDateString('en-IN', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <Badge variant="success">Confirmed</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
