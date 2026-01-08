import { useState, useEffect } from 'react';
import { Users, UserPlus, Search, Trash2, Eye, Mail, Phone, Calendar } from 'lucide-react';
import MemberRegistration from './MemberRegistation';
import { membersStorage } from '../utils/storage';

 function MemberManagement() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [members, setMembers] = useState([]);

  // Load members from storage on mount
  useEffect(() => {
    const loadedMembers = membersStorage.getAll();
    console.log('📂 Loading members from storage:', loadedMembers);
    setMembers(loadedMembers);
  }, []);

  // Reload members when coming back to this tab
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedMembers = membersStorage.getAll();
      setMembers(updatedMembers);
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleMemberAdded = (newMember) => {
    // Add to storage
    const success = membersStorage.add(newMember);
    if (success) {
      // Reload from storage to ensure sync
      const updatedMembers = membersStorage.getAll();
      setMembers(updatedMembers);
      setShowRegistration(false);
      console.log('✅ Member successfully added and displayed!');
      alert('✅ सदस्य सफलतापूर्वक जोड़ा गया और save हो गया!');
    } else {
      alert('❌ Error: सदस्य add नहीं हो पाया');
    }
  };

  const handleDeleteMember = (id) => {
    if (window.confirm('क्या आप इस सदस्य को delete करना चाहते हैं?')) {
      // Delete from storage
      const success = membersStorage.delete(id);
      if (success) {
        // Reload from storage to ensure sync
        const updatedMembers = membersStorage.getAll();
        setMembers(updatedMembers);
        console.log('✅ Member successfully deleted!');
        alert('🗑️ सदस्य delete हो गया और storage से हट गया!');
      } else {
        alert('❌ Error: सदस्य delete नहीं हो पाया');
      }
    }
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone.includes(searchTerm)
  );

  const getMembershipColor = (type) => {
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-slate-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <Users className="w-12 h-12" />
            <div>
              <h2 className="text-4xl mb-2">सदस्य प्रबंधन</h2>
              <p className="text-xl text-orange-100">Member Management</p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setShowRegistration(true)}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-all flex items-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Add New Member
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-100 mb-1">कुल सदस्य</p>
            <p className="text-3xl">{members.length}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-100 mb-1">Active सदस्य</p>
            <p className="text-3xl">{members.filter(m => m.status === 'Active').length}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-100 mb-1">कुल संग्रह</p>
            <p className="text-3xl">₹{members.reduce((sum, m) => sum + m.membershipAmount, 0)}</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Name, ID, Email, Phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Member ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Contact</th>
                <th className="px-6 py-4 text-left">Membership</th>
                <th className="px-6 py-4 text-left">Joined</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMembers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-xl">कोई सदस्य नहीं मिला</p>
                  </td>
                </tr>
              ) : (
                filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-orange-600">{member.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white">
                          {member.photo ? (
                            <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" />
                          ) : (
                            member.name.charAt(0)
                          )}
                        </div>
                        <div>
                          <p className="text-gray-800">{member.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="flex items-center gap-1 text-gray-700">
                          <Mail className="w-4 h-4" />
                          {member.email}
                        </p>
                        <p className="flex items-center gap-1 text-gray-600 mt-1">
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${getMembershipColor(member.membershipType)}`}>
                          {member.membershipTypeName}
                        </span>
                        <p className="text-sm text-gray-600 mt-1">निःशुल्क</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {member.joinedDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedMember(member)}
                          className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-all"
                          title="View Details"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteMember(member.id)}
                          className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete Member"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Member Registration Modal */}
      {showRegistration && (
        <MemberRegistration
          onMemberAdded={handleMemberAdded}
          onClose={() => setShowRegistration(false)}
        />
      )}

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-t-2xl">
              <h3 className="text-3xl mb-2">Member Details</h3>
              <p className="text-orange-100">सदस्य विवरण</p>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  {selectedMember.photo ? (
                    <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    selectedMember.name.charAt(0)
                  )}
                </div>
                <h4 className="text-2xl text-gray-800">{selectedMember.name}</h4>
                <p className="text-gray-600">{selectedMember.id}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg text-gray-800">{selectedMember.email}</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg text-gray-800">{selectedMember.phone}</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4 md:col-span-2">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-lg text-gray-800">{selectedMember.address}</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="text-sm text-gray-500">Membership Type</p>
                  <p className="text-lg text-gray-800">{selectedMember.membershipTypeName}</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="text-sm text-gray-500">Membership Fee</p>
                  <p className="text-lg text-gray-800">निःशुल्क (Free)</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="text-sm text-gray-500">Joined Date</p>
                  <p className="text-lg text-gray-800">{selectedMember.joinedDate}</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-lg text-gray-800">{selectedMember.status}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="w-full mt-6 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberManagement;
