import { useState } from 'react';
import { Search, Filter, Download, Calendar, Heart, IndianRupee, Eye, X } from 'lucide-react';

 function DonationHistory({ user }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterYear, setFilterYear] = useState('all');
  const [selectedDonation, setSelectedDonation] = useState(null);

  const donations = [
    {
      id: 'DN002',
      amount: 2001,
      date: '10 Nov 2024',
      time: '03:15 PM',
      method: 'Net Banking',
      transactionId: 'NB2024111098765',
      status: 'Completed',
      receipt: true,
      purpose: 'पंडाल निर्माण',
      year: 2025
    },
    {
      id: 'DN004',
      amount: 3001,
      date: '05 Oct 2024',
      time: '09:20 AM',
      method: 'Debit Card',
      transactionId: 'DC2024100567890',
      status: 'Completed',
      receipt: true,
      purpose: 'भोजन व्यवस्था',
      year: 2025
    },
    {
      id: 'DN005',
      amount: 11001,
      date: '20 Oct 2023',
      time: '02:30 PM',
      method: 'UPI',
      transactionId: 'UPI2023102011111',
      status: 'Completed',
      receipt: true,
      purpose: 'नवरात्रि उत्सव 2023',
      year: 2025
    },
    {
      id: 'DN006',
      amount: 501,
      date: '15 Oct 2023',
      time: '04:00 PM',
      method: 'Cash',
      transactionId: 'CASH202310150001',
      status: 'Completed',
      receipt: false,
      purpose: 'सामान्य दान',
      year: 2025
    }
  ];

  const filteredDonations = donations.filter(donation => {
    const matchesSearch = 
      donation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.purpose.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || donation.status === filterStatus;
    const matchesYear = filterYear === 'all' || donation.year.toString() === filterYear;

    return matchesSearch && matchesStatus && matchesYear;
  });

  const totalAmount = filteredDonations.reduce((sum, d) => sum + d.amount, 0);
  const totalCount = filteredDonations.length;

  const handleDownloadReceipt = (donation) => {
    alert(`Downloading receipt for ${donation.id}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMethodIcon = (method) => {
    switch (method) {
      case 'UPI':
        return '📱';
      case 'Net Banking':
        return '🏦';
      case 'Credit Card':
      case 'Debit Card':
        return '💳';
      case 'Cash':
        return '💵';
      default:
        return '💰';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-purple-500 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Heart className="w-12 h-12" />
          <div>
            <h2 className="text-4xl mb-2">दान इतिहास</h2>
            <p className="text-xl text-orange-100">Donation History</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-100 mb-1">कुल दान</p>
            <p className="text-3xl flex items-center gap-1">
              <IndianRupee className="w-6 h-6" />
              {totalAmount.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-100 mb-1">कुल लेनदेन</p>
            <p className="text-3xl">{totalCount}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-100 mb-1">औसत दान</p>
            <p className="text-3xl flex items-center gap-1">
              <IndianRupee className="w-6 h-6" />
              {totalCount > 0 ? Math.round(totalAmount / totalCount).toLocaleString('en-IN') : 0}
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ID, Transaction, Purpose..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none appearance-none"
            >
              <option value="all">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          {/* Year Filter */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none appearance-none"
            >
              <option value="all">All Years</option>
              <option value="2024">2026</option>
              <option value="2023">2025</option>
              <option value="2022">2024</option>
            </select>
          </div>
        </div>
      </div>

      {/* Donations List */}
      <div className="space-y-4">
        {filteredDonations.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl text-gray-600 mb-2">कोई दान नहीं मिला</h3>
            <p className="text-gray-500">अपने search criteria को बदलकर देखें</p>
          </div>
        ) : (
          filteredDonations.map((donation) => (
            <div 
              key={donation.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  {/* Left Section */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{getMethodIcon(donation.method)}</span>
                      <div>
                        <h3 className="text-xl text-gray-800">{donation.purpose}</h3>
                        <p className="text-sm text-gray-500">ID: {donation.id}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {donation.date} • {donation.time}
                      </div>
                      <div>
                        Method: <span className="font-semibold">{donation.method}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-3xl text-orange-600 flex items-center gap-1">
                      <IndianRupee className="w-6 h-6" />
                      {donation.amount.toLocaleString('en-IN')}
                    </div>
                    <span className={`px-4 py-1 rounded-full text-sm ${getStatusColor(donation.status)}`}>
                      {donation.status}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedDonation(donation)}
                        className="flex items-center gap-1 text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      {donation.receipt && (
                        <button
                          onClick={() => handleDownloadReceipt(donation)}
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Receipt
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Donation Detail Modal */}
      {selectedDonation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative animate-fade-in">
            <button
              onClick={() => setSelectedDonation(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-orange-400 text-white p-8 rounded-t-2xl">
              <h3 className="text-3xl mb-2">Transaction Details</h3>
              <p className="text-orange-100">लेनदेन विवरण</p>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                {/* Amount */}
                <div className="text-center pb-6 border-b border-gray-200">
                  <p className="text-gray-500 mb-2">दान राशि</p>
                  <p className="text-5xl text-orange-600 flex items-center justify-center gap-2">
                    <IndianRupee className="w-10 h-10" />
                    {selectedDonation.amount.toLocaleString('en-IN')}
                  </p>
                  <span className={`inline-block mt-3 px-4 py-1 rounded-full ${getStatusColor(selectedDonation.status)}`}>
                    {selectedDonation.status}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500">Donation ID</p>
                    <p className="text-lg text-gray-800">{selectedDonation.id}</p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500">Transaction ID</p>
                    <p className="text-lg text-gray-800 break-all">{selectedDonation.transactionId}</p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p className="text-lg text-gray-800">{selectedDonation.date}</p>
                    <p className="text-sm text-gray-600">{selectedDonation.time}</p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="text-lg text-gray-800">{selectedDonation.method}</p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4 md:col-span-2">
                    <p className="text-sm text-gray-500">Purpose</p>
                    <p className="text-lg text-gray-800">{selectedDonation.purpose}</p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500">Donor Name</p>
                    <p className="text-lg text-gray-800">{user.name}</p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500">Donor Email</p>
                    <p className="text-lg text-gray-800">{user.email}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-6 border-t border-gray-200">
                  {selectedDonation.receipt && (
                    <button
                      onClick={() => handleDownloadReceipt(selectedDonation)}
                      className="flex-1 bg-purple-400 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Receipt
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedDonation(null)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Message */}
      <div className="mt-8 bg-red-500 text-white rounded-2xl p-8 text-center">
        <h3 className="text-3xl mb-2">🙏 धन्यवाद 🙏</h3>
        <p className="text-xl">
          आपके सभी योगदान के लिए हृदय से आभार
        </p>
        <p className="text-lg mt-2 opacity-90">
          Thank you for all your contributions
        </p>
      </div>
    </div>
  );
}
export default DonationHistory