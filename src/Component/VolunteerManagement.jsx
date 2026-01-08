import { useState, useEffect } from 'react';
import { Users, Search, Trash2, Eye, Mail, Phone, Calendar, Clock } from 'lucide-react';
import { volunteersStorage } from '../utils/storage';

 function VolunteerManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [volunteers, setVolunteers] = useState([]);

  // Load volunteers from storage on mount
  useEffect(() => {
    const loadedVolunteers = volunteersStorage.getAll();
    console.log('📂 Loading volunteers from storage:', loadedVolunteers);
    setVolunteers(loadedVolunteers);
  }, []);

  // Reload volunteers when coming back to this tab
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedVolunteers = volunteersStorage.getAll();
      setVolunteers(updatedVolunteers);
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleDeleteVolunteer = (id) => {
    if (window.confirm('क्या आप इस स्वयंसेवक को delete करना चाहते हैं?')) {
      // Delete from storage
      const success = volunteersStorage.delete(id);
      if (success) {
        // Reload from storage to ensure sync
        const updatedVolunteers = volunteersStorage.getAll();
        setVolunteers(updatedVolunteers);
        console.log('✅ Volunteer successfully deleted!');
        alert('🗑️ स्वयंसेवक delete हो गया और storage से हट गया!');
      } else {
        alert('❌ Error: स्वयंसेवक delete नहीं हो पाया');
      }
    }
  };

  const handleExportVolunteers = () => {
    exportToJSON(volunteers, 'volunteers-data.json');
  };

  const handleImportVolunteers = (e) => {
    const file = e.target.files[0];
    if (file) {
      importFromJSON(file, (data) => {
        if (Array.isArray(data)) {
          data.forEach(volunteer => volunteersStorage.add(volunteer));
          setVolunteers(volunteersStorage.getAll());
          alert('Volunteers imported successfully!');
        }
      });
    }
  };

  const filteredVolunteers = volunteers.filter(volunteer =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.phone.includes(searchTerm)
  );

  const totalHours = volunteers.reduce((sum, v) => sum + v.hoursContributed, 0);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-purple-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Users className="w-12 h-12" />
          <div>
            <h2 className="text-4xl mb-2">स्वयंसेवक प्रबंधन</h2>
            <p className="text-xl text-blue-100">Volunteer Management</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-blue-100 mb-1">कुल स्वयंसेवक</p>
            <p className="text-3xl">{volunteers.length}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-blue-100 mb-1">Active स्वयंसेवक</p>
            <p className="text-3xl">{volunteers.filter(v => v.status === 'Active').length}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-blue-100 mb-1">कुल योगदान घंटे</p>
            <p className="text-3xl">{totalHours}+</p>
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
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Volunteers Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Volunteer ID</th>
                <th className="px-6 py-4 text-left">Name & Age</th>
                <th className="px-6 py-4 text-left">Contact</th>
                <th className="px-6 py-4 text-left">Availability</th>
                <th className="px-6 py-4 text-left">Hours</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredVolunteers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-xl">कोई स्वयंसेवक नहीं मिला</p>
                  </td>
                </tr>
              ) : (
                filteredVolunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-blue-600">{volunteer.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                          {volunteer.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-gray-800">{volunteer.name}</p>
                          <p className="text-sm text-gray-500">{volunteer.age} years</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="flex items-center gap-1 text-gray-700">
                          <Mail className="w-4 h-4" />
                          {volunteer.email}
                        </p>
                        <p className="flex items-center gap-1 text-gray-600 mt-1">
                          <Phone className="w-4 h-4" />
                          {volunteer.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {volunteer.availability.map((time, idx) => (
                          <span key={idx} className="block text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {time}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-gray-700">
                        <Clock className="w-4 h-4" />
                        {volunteer.hoursContributed}h
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                        {volunteer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedVolunteer(volunteer)}
                          className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-all"
                          title="View Details"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteVolunteer(volunteer.id)}
                          className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete Volunteer"
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

      {/* Volunteer Details Modal */}
      {selectedVolunteer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative">
            <button
              onClick={() => setSelectedVolunteer(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>

            <div className="bg-purple-600 text-white p-8 rounded-t-2xl">
              <h3 className="text-3xl mb-2">Volunteer Details</h3>
              <p className="text-blue-100">स्वयंसेवक विवरण</p>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  {selectedVolunteer.name.charAt(0)}
                </div>
                <h4 className="text-2xl text-gray-800">{selectedVolunteer.name}</h4>
                <p className="text-gray-600">{selectedVolunteer.id} • {selectedVolunteer.age} years</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg text-gray-800">{selectedVolunteer.email}</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg text-gray-800">{selectedVolunteer.phone}</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 md:col-span-2">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-lg text-gray-800">{selectedVolunteer.address}</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 md:col-span-2">
                  <p className="text-sm text-gray-500">Availability</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedVolunteer.availability.map((time, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 md:col-span-2">
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="text-lg text-gray-800">{selectedVolunteer.experience}</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-gray-500">Registered Date</p>
                  <p className="text-lg text-gray-800">{selectedVolunteer.registeredDate}</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-gray-500">Hours Contributed</p>
                  <p className="text-lg text-gray-800">{selectedVolunteer.hoursContributed} hours</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-lg text-gray-800">{selectedVolunteer.status}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedVolunteer(null)}
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

export default VolunteerManagement