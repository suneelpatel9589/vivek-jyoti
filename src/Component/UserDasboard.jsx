import { User, Heart, Users, Calendar, Award, LogOut, History, UserCog } from 'lucide-react';
import { useState } from 'react';
import  DonationHistory  from './DonationHistory';
import VolunteerManagement  from './VolunteerManagement';
import MemberManagement from './MemberManagement';

function UserDashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');

  const donations = [
    { id: 1, amount: 5001, date: '15 Dec 2024', status: 'Completed' },
    { id: 2, amount: 2001, date: '10 Nov 2024', status: 'Completed' },
    { id: 3, amount: 1001, date: '25 Oct 2024', status: 'Completed' }
  ];

  const volunteerActivities = [
    { id: 1, activity: 'पंडाल सज्जा', date: '5 Oct 2024', hours: '4 घंटे' },
    { id: 2, activity: 'भोजन वितरण', date: '8 Oct 2024', hours: '6 घंटे' },
    { id: 3, activity: 'भीड़ प्रबंधन', date: '11 Oct 2024', hours: '5 घंटे' }
  ];

  const totalDonation = donations.reduce((sum, d) => sum + d.amount, 0);
  const totalVolunteerHours = volunteerActivities.length * 5;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-red-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* User Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl mb-2 text-gray-800">{user.name}</h2>
              <p className="text-lg text-gray-600">{user.email}</p>
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <div className="bg-orange-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-orange-600">सदस्य बने</p>
                  <p className="text-orange-900">Jan 2024</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-green-600">स्टेटस</p>
                  <p className="text-green-900">Active</p>
                </div>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
          <div className="flex flex-wrap border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 transition-all min-w-[150px] ${
                activeTab === 'overview'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:bg-orange-50'
              }`}
            >
              <Award className="w-5 h-5" />
              <span className="text-sm md:text-base">Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 transition-all min-w-[150px] ${
                activeTab === 'history'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:bg-orange-50'
              }`}
            >
              <History className="w-5 h-5" />
              <span className="text-sm md:text-base">Donation</span>
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 transition-all min-w-[150px] ${
                activeTab === 'members'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:bg-orange-50'
              }`}
            >
              <UserCog className="w-5 h-5" />
              <span className="text-sm md:text-base">Members</span>
            </button>
            <button
              onClick={() => setActiveTab('volunteers')}
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 transition-all min-w-[150px] ${
                activeTab === 'volunteers'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:bg-orange-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="text-sm md:text-base">Volunteers</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' ? (
          <>
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">कुल दान</p>
                    <p className="text-2xl text-gray-800">₹{totalDonation}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">स्वयंसेवक घंटे</p>
                    <p className="text-2xl text-gray-800">{totalVolunteerHours}+</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">कार्यक्रम</p>
                    <p className="text-2xl text-gray-800">{volunteerActivities.length}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Recent Donations */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl text-orange-900">हाल के दान</h3>
                </div>
                
                <div className="space-y-4">
                  {donations.map((donation) => (
                    <div 
                      key={donation.id}
                      className="border-l-4 border-orange-600 bg-orange-50 p-4 rounded-r-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-2xl text-gray-800">₹{donation.amount}</p>
                          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <Calendar className="w-4 h-4" />
                            {donation.date}
                          </p>
                        </div>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                          {donation.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveTab('history')}
                  className="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all"
                >
                  View All Donations
                </button>
              </div>

              {/* Volunteer Activities */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl text-blue-900">स्वयंसेवक गतिविधियां</h3>
                </div>
                
                <div className="space-y-4">
                  {volunteerActivities.map((activity) => (
                    <div 
                      key={activity.id}
                      className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-r-lg"
                    >
                      <p className="text-lg text-gray-800 mb-1">{activity.activity}</p>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {activity.date}
                        </span>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded">
                          {activity.hours}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                  View All Activities
                </button>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="mt-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 text-center">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl mb-2">🌟 सम्मानित सदस्य 🌟</h3>
              <p className="text-xl">
                आपके योगदान के लिए धन्यवाद!
              </p>
              <p className="text-lg mt-2 opacity-90">
                Thank you for your valuable contribution!
              </p>
            </div>
          </>
        ) : activeTab === 'history' ? (
          <DonationHistory user={user} />
        ) : activeTab === 'members' ? (
          <MemberManagement />
        ) : (
          <VolunteerManagement />
        )}
      </div>
    </section>
  );
}

export default UserDashboard;