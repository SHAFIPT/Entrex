"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Baby, Mail, Phone, MessageSquare, Search, RefreshCw, Eye, Filter, ArrowUpDown, Loader2 } from 'lucide-react';
import { fetchFormSubmissions } from '@/services/formService';
import toast from 'react-hot-toast';

// Types
export interface FormSubmission {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  adults: number;
  children: number;
  message?: string;
}

interface MobileSubmissionCardProps {
  submission: FormSubmission;
  onView: (submission: FormSubmission) => void;
}

interface TableRowProps {
  submission: FormSubmission;
  onView: (submission: FormSubmission) => void;
  isEven: boolean;
}

interface SubmissionModalProps {
  submission: FormSubmission | null;
  isOpen: boolean;
  onClose: () => void;
}

// Format date utility
const formatDate = (dateString: string): string => {
  if (!dateString) return 'N/A';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return 'Invalid Date';
  }
};

// Loading Spinner Component
const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-16 w-16'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />
  );
};

// Mobile Card Component
const MobileSubmissionCard: React.FC<MobileSubmissionCardProps> = ({ submission, onView }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-200">
    <div className="flex justify-between items-start mb-3">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-lg mb-1">{submission.name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Mail className="w-3 h-3 mr-1" />
          <span className="truncate">{submission.email}</span>
        </div>
      </div>
      <button
        onClick={() => onView(submission)}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        aria-label="View submission details"
      >
        <Eye className="w-4 h-4" />
      </button>
    </div>
    
    <div className="space-y-2 text-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-600">
          <Phone className="w-3 h-3 mr-2 text-green-500" />
          <span>{submission.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-3 h-3 mr-2 text-purple-500" />
          <span>{formatDate(submission.date)}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-600">
          <Clock className="w-3 h-3 mr-2 text-orange-500" />
          <span>{submission.time || 'N/A'}</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center text-gray-600">
            <Users className="w-3 h-3 mr-1 text-blue-500" />
            <span>{submission.adults}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Baby className="w-3 h-3 mr-1 text-pink-500" />
            <span>{submission.children}</span>
          </div>
        </div>
      </div>
      
      {submission.message && (
        <div className="flex items-center text-gray-500 mt-2">
          <MessageSquare className="w-3 h-3 mr-1" />
          <span className="text-xs">Message included</span>
        </div>
      )}
    </div>
  </div>
);

// Table Row Component
const TableRow: React.FC<TableRowProps> = ({ submission, onView, isEven }) => (
  <tr className={`${isEven ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-150`}>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="font-medium text-gray-900">{submission.name}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center text-sm text-gray-600">
        <Mail className="w-3 h-3 mr-2 text-blue-500" />
        <span className="truncate max-w-xs" title={submission.email}>{submission.email}</span>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center text-sm text-gray-600">
        <Phone className="w-3 h-3 mr-2 text-green-500" />
        <span>{submission.phone}</span>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center text-sm text-gray-600">
        <Calendar className="w-3 h-3 mr-2 text-purple-500" />
        <span>{formatDate(submission.date)}</span>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center text-sm text-gray-600">
        <Clock className="w-3 h-3 mr-2 text-orange-500" />
        <span>{submission.time || 'N/A'}</span>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center space-x-2 text-sm">
        <div className="flex items-center text-gray-600">
          <Users className="w-3 h-3 mr-1 text-blue-500" />
          <span>{submission.adults}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Baby className="w-3 h-3 mr-1 text-pink-500" />
          <span>{submission.children}</span>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-center">
      {submission.message ? (
        <MessageSquare className="w-4 h-4 text-green-500 mx-auto" />
      ) : (
        <span className="text-gray-300">-</span>
      )}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <button
        onClick={() => onView(submission)}
        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
        title="View Details"
        aria-label="View submission details"
      >
        <Eye className="w-4 h-4" />
      </button>
    </td>
  </tr>
);

// Modal Component
const SubmissionModal: React.FC<SubmissionModalProps> = ({ submission, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !submission) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Submission Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-light w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <div className="bg-gray-50 p-3 rounded-lg text-gray-900 font-medium">
                {submission.name}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <div className="bg-gray-50 p-3 rounded-lg text-gray-900">
                {submission.phone}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="bg-gray-50 p-3 rounded-lg text-gray-900 break-all">
              {submission.email}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Date</label>
              <div className="bg-gray-50 p-3 rounded-lg text-gray-900">
                {formatDate(submission.date)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Time</label>
              <div className="bg-gray-50 p-3 rounded-lg text-gray-900">
                {submission.time || 'Not specified'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Adults</label>
              <div className="bg-blue-50 p-3 rounded-lg text-gray-900 font-semibold">
                {submission.adults}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Children</label>
              <div className="bg-pink-50 p-3 rounded-lg text-gray-900 font-semibold">
                {submission.children}
              </div>
            </div>
          </div>

          {submission.message && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <div className="bg-gray-50 p-4 rounded-lg text-gray-900 whitespace-pre-wrap leading-relaxed">
                {submission.message}
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-xl border-t border-gray-200">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const FormSubmissionsList: React.FC = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch submissions with toast notifications
  const loadSubmissions = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
        toast.loading('Refreshing submissions...', { id: 'refresh' });
      } else {
        setLoading(true);
      }
      
      const data = await fetchFormSubmissions();
      
      if (Array.isArray(data)) {
        setSubmissions(data);
        setFilteredSubmissions(data);
        
        if (isRefresh) {
          toast.success(`Loaded ${data.length} submissions`, { id: 'refresh' });
        }
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (err) {
      console.error('Error loading submissions:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch submissions';
      
      if (isRefresh) {
        toast.error(errorMessage, { id: 'refresh' });
      } else {
        toast.error(errorMessage);
      }
      
      // Set empty array on error to prevent crashes
      setSubmissions([]);
      setFilteredSubmissions([]);
    } finally {
      if (isRefresh) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  };

  // Initial load
  useEffect(() => {
    loadSubmissions(false);
  }, []);

  // Filter submissions
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredSubmissions(submissions);
      return;
    }

    const filtered = submissions.filter(submission => {
      const search = searchTerm.toLowerCase().trim();
      return (
        submission.name?.toLowerCase().includes(search) ||
        submission.email?.toLowerCase().includes(search) ||
        submission.phone?.includes(search)
      );
    });
    
    setFilteredSubmissions(filtered);
  }, [searchTerm, submissions]);

  const handleView = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const handleRefresh = () => {
    if (!refreshing) {
      loadSubmissions(true);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    toast.success('Search cleared');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="text-gray-600 text-lg mt-4">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Form Submissions</h1>
              <p className="text-gray-600">View and manage all form submissions</p>
            </div>
            <div className="mt-6 sm:mt-0 flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-2">
                <button
                  className="p-2 rounded-lg transition-colors bg-blue-100 text-blue-600"
                  aria-label="Table view"
                >
                  <Filter className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center font-medium disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {refreshing ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                {refreshing ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Total: <span className="font-semibold">{submissions.length}</span></span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Showing: <span className="font-semibold">{filteredSubmissions.length}</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* No Results */}
        {filteredSubmissions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {submissions.length === 0 ? 'No submissions yet' : 'No results found'}
            </h3>
            <p className="text-gray-600 mb-6">
              {submissions.length === 0 
                ? 'Form submissions will appear here once they are received.' 
                : 'Try adjusting your search criteria to find what you\'re looking for.'}
            </p>
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Mobile View - Cards */}
            <div className="block sm:hidden space-y-4">
              {filteredSubmissions.map((submission, index) => (
                <MobileSubmissionCard
                  key={`mobile-${index}-${submission.email}`}
                  submission={submission}
                  onView={handleView}
                />
              ))}
            </div>

            {/* Desktop View - Table */}
            <div className="hidden sm:block bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <span>Name</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guests</th>
                      <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredSubmissions.map((submission, index) => (
                      <TableRow
                        key={`table-${index}-${submission.email}`}
                        submission={submission}
                        onView={handleView}
                        isEven={index % 2 === 0}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      <SubmissionModal
        submission={selectedSubmission}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default FormSubmissionsList;