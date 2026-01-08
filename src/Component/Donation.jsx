import { Heart, IndianRupee, QrCode, Building2 } from 'lucide-react';
import { useState } from 'react';

 function Donation() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  
  const predefinedAmounts = [501, 1001, 2001, 5001, 11001];

  return (
    <section className="py-20 px-4 bg-linear-to-l from-pink-300 to-red-200 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-red-600 fill-current animate-pulse" />
          </div>
          <h2 className="text-5xl mb-4 text-orange-900">दान/चंदा</h2>
          <p className="text-xl text-gray-600">Donation</p>
          <p className="text-lg text-gray-500 mt-2">
            इस पावन उत्सव में अपना योगदान दें
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Online Donation Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl mb-6 text-orange-900 text-center">ऑनलाइन दान करें</h3>
            
            <div className="mb-6">
              <label className="block text-lg mb-3 text-gray-700">राशि चुनें</label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-lg border-2 transition-all ${
                      selectedAmount === amount
                        ? 'border-orange-600 bg-orange-50 text-orange-900'
                        : 'border-gray-300 hover:border-orange-400'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      <span>{amount}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="अन्य राशि दर्ज करें"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-lg mb-2 text-gray-700">आपका नाम</label>
              <input
                type="text"
                placeholder="नाम दर्ज करें"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-lg mb-2 text-gray-700">मोबाइल नंबर</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
              />
            </div>
            
            <button className="w-full bg-red-400 text-white py-4 rounded-lg text-xl hover:from-orange-700 hover:to-red-700 transition-all shadow-lg">
              दान करें
            </button>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              सुरक्षित भुगतान गेटवे के माध्यम से
            </p>
          </div>
          
          {/* Bank Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-orange-600" />
                <h3 className="text-3xl text-orange-900">बैंक विवरण</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <p className="text-sm text-gray-500">बैंक का नाम</p>
                  <p className="text-lg text-gray-800">State Bank of India</p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <p className="text-sm text-gray-500">खाता नाम</p>
                  <p className="text-lg text-gray-800">Vivek Jyoti Navdurga Samiti Masmasi</p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <p className="text-sm text-gray-500">खाता संख्या</p>
                  <p className="text-lg text-gray-800">12345678901234</p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4 py-2">
                  <p className="text-sm text-gray-500">IFSC Code</p>
                  <p className="text-lg text-gray-800">SBIN0001234</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <QrCode className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-2xl mb-4 text-orange-900">UPI से दान करें</h3>
              <div className="bg-gray-100 p-6 rounded-xl inline-block">
                <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 text-center">Not available <br />QR Code</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-700">UPI ID: navdurga@upi</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-orange-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl mb-4">🙏 धन्यवाद 🙏</h3>
          <p className="text-xl">
            आपके योगदान से हम इस उत्सव को और भव्य बना सकेंगे
          </p>
          <p className="text-lg mt-2 opacity-90">
            Your contribution helps us make this celebration more grand
          </p>
        </div>
      </div>
    </section>
  );
}
export default Donation
