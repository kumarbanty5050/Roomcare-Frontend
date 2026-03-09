import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge, StatusBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Plus, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const mockComplaints = [
  {
    id: 1,
    title: 'Water Leakage in Bathroom',
    category: 'Maintenance',
    priority: 'high',
    status: 'in_progress',
    description: 'Water is leaking from the ceiling in the bathroom',
    createdDate: '2024-02-20',
    updatedDate: '2024-02-21',
  },
  {
    id: 2,
    title: 'AC Not Working',
    category: 'Appliance',
    priority: 'high',
    status: 'open',
    description: 'AC is not cooling properly in the bedroom',
    createdDate: '2024-02-19',
    updatedDate: '2024-02-19',
  },
  {
    id: 3,
    title: 'Internet Connection Issue',
    category: 'Utility',
    priority: 'medium',
    status: 'resolved',
    description: 'WiFi router was not working, now fixed',
    createdDate: '2024-02-10',
    updatedDate: '2024-02-15',
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

const Complaints = () => {
  const [showNewComplaintForm, setShowNewComplaintForm] = useState(false);
  const openComplaints = mockComplaints.filter(c => c.status !== 'resolved');
  const resolvedComplaints = mockComplaints.filter(c => c.status === 'resolved');

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive/10 text-destructive';
      case 'medium':
        return 'bg-warning/10 text-warning';
      case 'low':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-gray-100 text-gray-700';
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
        <motion.div variants={itemVariants} className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Issues & Complaints</h2>
            <p className="text-gray-600">Track and manage maintenance issues</p>
          </div>
          <Button
            variant="accent"
            onClick={() => setShowNewComplaintForm(true)}
            className="hidden sm:flex"
          >
            <Plus size={18} />
            New Issue
          </Button>
        </motion.div>

        {/* Mobile New Complaint Button */}
        <motion.div variants={itemVariants} className="sm:hidden mb-6">
          <Button
            fullWidth
            variant="accent"
            onClick={() => setShowNewComplaintForm(true)}
          >
            <Plus size={18} />
            Raise New Issue
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 mb-1">Open Issues</p>
              <p className="text-2xl font-bold text-primary">{openComplaints.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 mb-1">Resolved</p>
              <p className="text-2xl font-bold text-success">{resolvedComplaints.length}</p>
            </CardContent>
          </Card>
          <Card className="col-span-2 sm:col-span-1">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 mb-1">Total</p>
              <p className="text-2xl font-bold text-gray-900">{mockComplaints.length}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Open Complaints */}
        {openComplaints.length > 0 && (
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Open Issues</h3>
            <div className="space-y-4">
              {openComplaints.map((complaint) => (
                <Card key={complaint.id} hoverEffect>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-base sm:text-lg">{complaint.title}</CardTitle>
                        <CardDescription>{complaint.category}</CardDescription>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Badge
                          className={getPriorityColor(complaint.priority)}
                          variant="secondary"
                        >
                          {complaint.priority.charAt(0).toUpperCase() + complaint.priority.slice(1)} Priority
                        </Badge>
                        <StatusBadge
                          status={complaint.status}
                          label={complaint.status === 'in_progress' ? 'In Progress' : 'Open'}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">{complaint.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-600 pt-2 border-t border-gray-200">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        Reported: {new Date(complaint.createdDate).toLocaleDateString('en-IN')}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        Updated: {new Date(complaint.updatedDate).toLocaleDateString('en-IN')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Resolved Complaints */}
        {resolvedComplaints.length > 0 && (
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resolved Issues</h3>
            <div className="space-y-4">
              {resolvedComplaints.map((complaint) => (
                <Card key={complaint.id}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-base sm:text-lg text-gray-600">{complaint.title}</CardTitle>
                        <CardDescription>{complaint.category}</CardDescription>
                      </div>
                      <StatusBadge status="resolved" label="Resolved" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-500">
                      Resolved on {new Date(complaint.updatedDate).toLocaleDateString('en-IN')}
                    </p>
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

export default Complaints;
