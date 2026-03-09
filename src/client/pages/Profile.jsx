import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Shield, LogOut, Key, Bell, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { useState } from 'react';

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

const Profile = () => {
  const { user } = useApp();
  const [showChangePassword, setShowChangePassword] = useState(false);

  const emergencyContact = {
    name: 'Priya Kumar',
    relation: 'Sister',
    phone: '+91 98765 54321',
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Profile Settings</h2>
          <p className="text-gray-600">Manage your account and preferences</p>
        </motion.div>

        {/* Profile Avatar & Basic Info */}
        <motion.div variants={itemVariants} className="mb-8">
          <Card hoverEffect>
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-primary">{user.name.charAt(0)}</span>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{user.name}</h3>
                  <p className="text-gray-600 mt-1">Tenant • Room {user.roomNumber}</p>
                  <p className="text-sm text-gray-500 mt-2">{user.propertyName}</p>
                </div>
                <Button variant="outline" className="hidden sm:block">
                  Edit Profile
                </Button>
              </div>
              <Button variant="outline" fullWidth className="sm:hidden mt-4">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Personal Information */}
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <Card>
            <div className="divide-y divide-gray-200">
              {/* Email */}
              <div className="p-4 sm:p-6 flex items-start gap-4">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="font-semibold text-gray-900 break-all">{user.email}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 sm:p-6 flex items-start gap-4">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="font-semibold text-gray-900">{user.phone}</p>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 sm:p-6 flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Rental Address</p>
                  <p className="font-semibold text-gray-900">{user.address}</p>
                  <p className="text-sm text-gray-600 mt-1">Room {user.roomNumber}, {user.propertyName}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
          <Card hoverEffect>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="font-semibold text-gray-900">{emergencyContact.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Relation</p>
                <p className="font-semibold text-gray-900">{emergencyContact.relation}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone</p>
                <p className="font-semibold text-gray-900">{emergencyContact.phone}</p>
              </div>
              <Button variant="outline" fullWidth className="mt-2">
                Update Emergency Contact
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security & Settings */}
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Settings</h3>
          <div className="space-y-4">
            {/* Change Password */}
            <Card hoverEffect>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <Key size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Change Password</p>
                      <p className="text-sm text-gray-600">Update your account password</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowChangePassword(!showChangePassword)}
                    className="hidden sm:block flex-shrink-0"
                  >
                    Change
                  </Button>
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  size="sm"
                  className="sm:hidden mt-3"
                  onClick={() => setShowChangePassword(!showChangePassword)}
                >
                  Change Password
                </Button>

                {/* Password Change Form */}
                {showChangePassword && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pt-4 border-t border-gray-200 space-y-4"
                  >
                    <input
                      type="password"
                      placeholder="Current password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="password"
                      placeholder="New password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="flex gap-2">
                      <Button variant="accent" size="sm" className="flex-1">
                        Update Password
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setShowChangePassword(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card hoverEffect>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Bell size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Notifications</p>
                      <p className="text-sm text-gray-600">Manage your notification preferences</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="hidden sm:block flex-shrink-0">
                    Manage
                  </Button>
                </div>
                <Button variant="outline" fullWidth size="sm" className="sm:hidden mt-3">
                  Manage Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Two-Factor Authentication */}
            <Card hoverEffect>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <Lock size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="hidden sm:block flex-shrink-0">
                    Enable
                  </Button>
                </div>
                <Button variant="outline" fullWidth size="sm" className="sm:hidden mt-3">
                  Enable 2FA
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Logout */}
        <motion.div variants={itemVariants}>
          <Button
            variant="destructive"
            fullWidth
            size="lg"
            className="mb-4"
          >
            <LogOut size={18} />
            Logout
          </Button>
          <p className="text-xs text-center text-gray-500">
            App Version 1.0.0 • Last updated Feb 22, 2024
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
