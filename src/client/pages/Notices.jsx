import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Bell, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const mockNotices = [
  {
    id: 1,
    title: 'Water Maintenance - Weekend Shutdown',
    category: 'urgent',
    content:
      'Water supply will be shut down on Saturday and Sunday (Feb 24-25) for maintenance. Please store water in advance.',
    date: '2024-02-20',
    read: false,
    icon: AlertTriangle,
  },
  {
    id: 2,
    title: 'Security System Upgrade',
    category: 'important',
    content:
      'A new security system is being installed in the building. There will be technicians present from 9 AM to 5 PM on Feb 23.',
    date: '2024-02-19',
    read: false,
    icon: Info,
  },
  {
    id: 3,
    title: 'Parking Area Cleaning',
    category: 'info',
    content:
      'The parking area will be cleaned on Thursday evening. Please ensure your vehicles are parked safely.',
    date: '2024-02-15',
    read: true,
    icon: Info,
  },
  {
    id: 4,
    title: 'Community Event - Annual Meet',
    category: 'event',
    content:
      'You are invited to the annual community gathering on March 3rd at the community hall. Light refreshments will be served.',
    date: '2024-02-12',
    read: true,
    icon: CheckCircle,
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

const Notices = () => {
  const [expandedId, setExpandedId] = useState(null);
  const unreadCount = mockNotices.filter(n => !n.read).length;

  const getCategoryColor = (category) => {
    switch (category) {
      case 'urgent':
        return 'bg-destructive/10 text-destructive';
      case 'important':
        return 'bg-warning/10 text-warning';
      case 'info':
        return 'bg-primary/10 text-primary';
      case 'event':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'urgent':
        return 'Urgent';
      case 'important':
        return 'Important';
      case 'info':
        return 'Information';
      case 'event':
        return 'Event';
      default:
        return 'Notice';
    }
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Notices & Announcements</h2>
            {unreadCount > 0 && (
              <Badge variant="destructive">{unreadCount} new</Badge>
            )}
          </div>
          <p className="text-gray-600">Stay updated with important announcements</p>
        </motion.div>

        {/* Unread Notice Alert */}
        {unreadCount > 0 && (
          <motion.div variants={itemVariants} className="mb-8">
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-4 sm:p-6 flex items-center gap-3">
                <AlertTriangle size={20} className="text-warning flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">You have {unreadCount} unread notice{unreadCount !== 1 ? 's' : ''}</p>
                  <p className="text-sm text-gray-700">Please review important announcements</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Notices List */}
        <motion.div variants={itemVariants}>
          <div className="space-y-4">
            {mockNotices.map((notice) => {
              const Icon = notice.icon;
              const isExpanded = expandedId === notice.id;

              return (
                <motion.div
                  key={notice.id}
                  layout
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    hoverEffect
                    className={`cursor-pointer transition-all ${
                      !notice.read ? 'border-primary/50 bg-primary/2' : ''
                    }`}
                    onClick={() => setExpandedId(isExpanded ? null : notice.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${getCategoryColor(notice.category)} flex-shrink-0`}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <CardTitle className="text-base sm:text-lg">{notice.title}</CardTitle>
                              {!notice.read && (
                                <Badge variant="primary" className="mt-2">
                                  Unread
                                </Badge>
                              )}
                            </div>
                            <Badge
                              className={getCategoryColor(notice.category)}
                              variant="secondary"
                            >
                              {getCategoryLabel(notice.category)}
                            </Badge>
                          </div>
                          <CardDescription className="mt-1">
                            {new Date(notice.date).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CardContent className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">{notice.content}</p>
                        </CardContent>
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Notices;
