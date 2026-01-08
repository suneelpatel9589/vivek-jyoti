import { UserPlus, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { volunteersStorage } from '../utils/storage';

 function VolunteerForm({ onVolunteerAdded }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    address: '',
    experience: '',
    availability: []
  });

  const availabilityOptions = [
    'सुबह (6 AM - 12 PM)',
    'दोपहर (12 PM - 5 PM)',
    'शाम (5 PM - 10 PM)',
    'पूरे दिन'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to storage
    const volunteerId = `VOL${Date.now()}`;
    const newVolunteer = {
      id: volunteerId,
      name: formData.name,
      age: parseInt(formData.age),
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      availability: formData.availability,
      experience: formData.experience,
      registeredDate: new Date().toLocaleDateString('en-GB'),
      status: 'Active',
      hoursContributed: 0
    };
    
    volunteersStorage.add(newVolunteer);
    setSubmittedId(volunteerId);
    
    // Notify parent component if callback exists
    if (onVolunteerAdded) {
      onVolunteerAdded(newVolunteer);
    }
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        age: '',
        phone: '',
        email: '',
        address: '',
        experience: '',
        availability: []
      });
    }, 3000);
  };

  const toggleAvailability = (option) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(option)
        ? prev.availability.filter(a => a !== option)
        : [...prev.availability, option]
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-4xl mb-4 text-green-900">धन्यवाद! 🙏</h3>
            <p className="text-xl text-gray-700 mb-2">
              आपका पंजीकरण सफलतापूर्वक हो गया है
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Volunteer ID: <span className="font-semibold text-green-800">{submittedId}</span>
            </p>
            <p className="text-lg text-gray-600">
              हम जल्द ही आपसे संपर्क करेंगे
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                ✅ आपका डाटा सुरक्षित रूप से save हो गया है
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <UserPlus className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-5xl mb-4 text-orange-900">स्वयंसेवक पंजीकरण</h2>
          <p className="text-xl text-gray-600">Volunteer Registration</p>
          <p className="text-lg text-gray-500 mt-2">
            इस पावन उत्सव में अपना योगदान दें
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2 text-gray-700">
                  पूरा नाम <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="अपना नाम दर्ज करें"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none bg-white"
                />
              </div>
              
              <div>
                <label className="block text-lg mb-2 text-gray-700">
                  आयु <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  placeholder="आयु दर्ज करें"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none bg-white"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2 text-gray-700">
                  मोबाइल नंबर <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none bg-white"
                />
              </div>
              
              <div>
                <label className="block text-lg mb-2 text-gray-700">
                  ईमेल
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none bg-white"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-lg mb-2 text-gray-700">
                पता <span className="text-red-600">*</span>
              </label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="अपना पता दर्ज करें"
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none bg-white"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-lg mb-3 text-gray-700">
                उपलब्धता <span className="text-red-600">*</span>
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {availabilityOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleAvailability(option)}
                    className={`py-3 px-4 rounded-lg border-2 text-left transition-all ${
                      formData.availability.includes(option)
                        ? 'border-orange-600 bg-orange-50 text-orange-900'
                        : 'border-gray-300 bg-white hover:border-orange-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        formData.availability.includes(option)
                          ? 'border-orange-600 bg-orange-600'
                          : 'border-gray-400'
                      }`}>
                        {formData.availability.includes(option) && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-lg mb-2 text-gray-700">
                पूर्व अनुभव (यदि कोई हो)
              </label>
              <textarea
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                placeholder="अगर आपने पहले कभी किसी आयोजन में स्वयंसेवक के रूप में काम किया है तो बताएं"
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none bg-white"
              ></textarea>
            </div>
            
            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-600">
              <p className="text-gray-700">
                <strong>नोट:</strong> स्वयंसेवक के रूप में आप पंडाल सज्जा, भोजन वितरण, भीड़ प्रबंधन, और अन्य कार्यों में सहायता कर सकते हैं।
              </p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg text-xl hover:from-orange-700 hover:to-red-700 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <UserPlus className="w-6 h-6" />
              पंजीकरण करें
            </button>
          </form>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>किसी भी प्रश्न के लिए संपर्क करें: +91 98765 43210</p>
        </div>
      </div>
    </section>
  );
}
export default VolunteerForm
