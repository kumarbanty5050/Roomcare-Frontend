import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { StatusBadge, Badge } from '../components/ui/Badge';
import { Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const mockBookings = [
  {
    id: 1,
    roomNumber: '401',
    property: 'Green Tower Apartments',
    checkIn: '2024-01-15',
    checkOut: '2024-12-31',
    status: 'active',
    duration: '11 months',
    tenants: 2,
    address: 'Sector 7, Bangalore',
  },
  {
    id: 2,
    roomNumber: '301',
    property: 'Blue Haven Complex',
    checkIn: '2023-05-01',
    checkOut: '2024-01-14',
    status: 'completed',
    duration: '8 months',
    tenants: 1,
    address: 'Sector 4, Bangalore',
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

const Bookings = () => {
  const activeBooking = mockBookings.find(b => b.status === 'active');
  const pastBookings = mockBookings.filter(b => b.status !== 'active');

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Bookings</h2>
          <p className="text-gray-600">Manage your rental bookings and history</p>
        </motion.div>

        {/* Active Booking */}
        {activeBooking && (
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Booking</h3>
            <Card hoverEffect>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Room {activeBooking.roomNumber}</CardTitle>
                    <CardDescription>{activeBooking.property}</CardDescription>
                  </div>
                  <StatusBadge status="active" label="Active" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">{activeBooking.address}</p>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Check-in</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(activeBooking.checkIn).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Check-out</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(activeBooking.checkOut).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-primary" />
                    <div>
                      <p className="text-sm text-gray-600">Booking Duration</p>
                      <p className="font-semibold text-gray-900">{activeBooking.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Tenants */}
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Number of Tenants</p>
                    <p className="font-semibold text-gray-900">{activeBooking.tenants}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Past Bookings */}
        {pastBookings.length > 0 && (
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking History</h3>
            <div className="space-y-4">
              {pastBookings.map((booking) => (
                <Card key={booking.id} hoverEffect>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Room {booking.roomNumber}</h4>
                        <p className="text-sm text-gray-600">{booking.property}</p>
                      </div>
                      <StatusBadge status="completed" label="Completed" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Check-in</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(booking.checkIn).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Check-out</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(booking.checkOut).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Duration</p>
                        <p className="font-semibold text-gray-900">{booking.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Bookings;
