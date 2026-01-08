import { useState } from 'react';
import { UserPlus, CheckCircle, Upload, X } from 'lucide-react';

function MemberRegistration({ onMemberAdded, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    photo: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMember = {
      id: `MEM${Date.now()}`,
      ...formData,
      membershipType: 'free',
      membershipTypeName: 'सदस्य',
      membershipAmount: 0,
      joinedDate: new Date().toLocaleDateString('en-GB'),
      status: 'Active'
    };

    if (onMemberAdded) {
      onMemberAdded(newMember);
      console.log('✅ Member data sent to parent component for permanent storage!');
    }
    
    setIsSubmitted(true);
    setTimeout(() => {
      if (onClose) onClose();
      setIsSubmitted(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-3xl mb-4 text-green-900">सफल! 🎉</h3>
          <p className="text-xl text-gray-700 mb-2">
            सदस्यता सफलतापूर्वक पंजीकृत हो गई है
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Member ID: {`MEM${Date.now()}`}
          </p>
          <p className="text-sm text-gray-500 mt-4">
            ✅ आपका डाटा सुरक्षित रूप से save हो गया है
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-t-2xl">
          <div className="flex items-center gap-4">
            <UserPlus className="w-12 h-12" />
            <div>
              <h2 className="text-3xl mb-2">सदस्य पंजीकरण (निःशुल्क)</h2>
              <p className="text-xl text-orange-100">Free Member Registration</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 text-center">
              <p className="text-lg text-orange-900">
                ✨ सदस्यता पूर्णतः निःशुल्क है ✨
              </p>
              <p className="text-sm text-orange-700 mt-1">
                Membership is completely free
              </p>
            </div>

            {/* Photo Upload */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center overflow-hidden mb-4">
                {formData.photo ? (
                  <img src={formData.photo} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <UserPlus className="w-16 h-16 text-gray-400" />
                )}
              </div>
              <label className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-200 transition-all">
                <Upload className="w-5 h-5" />
                फोटो अपलोड करें
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">पूरा नाम <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="नाम दर्ज करें"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">ईमेल <span className="text-red-600">*</span></label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">मोबाइल नंबर <span className="text-red-600">*</span></label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">पता <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="पूरा पता"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <h4 className="text-lg text-green-900 mb-2">सदस्यता लाभ:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-green-800">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  कार्यक्रमों में प्राथमिकता
                </li>
                <li className="flex items-start gap-2 text-sm text-green-800">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  समिति की गतिविधियों में भागीदारी
                </li>
                <li className="flex items-start gap-2 text-sm text-green-800">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  विशेष आयोजनों की जानकारी
                </li>
                <li className="flex items-start gap-2 text-sm text-green-800">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  सामाजिक कार्यों में योगदान का अवसर
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all text-lg shadow-lg flex items-center justify-center gap-2"
            >
              <UserPlus className="w-6 h-6" />
              पंजीकरण पूर्ण करें
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default MemberRegistration