import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

 function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Phone className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-5xl mb-4 text-orange-900">संपर्क करें</h2>
          <p className="text-xl text-gray-600">Contact Us</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 bg-red-200 rounded-2xl">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl mb-3 text-gray-800">फ़ोन</h3>
            <p className="text-lg text-gray-600">+91 8147826264</p>
            <p className="text-lg text-gray-600">+91 9993326940</p>
          </div>
          
          <div className="text-center p-8 bg-red-200 rounded-2xl">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl mb-3 text-gray-800">ईमेल</h3>
            <p className="text-lg text-gray-600">vivekjyoti@navdurgautsav.com</p>
            <p className="text-lg text-gray-600">contact@navdurgautsav.org</p>
          </div>
          
          <div className="text-center p-8 bg-red-200 rounded-2xl">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl mb-3 text-gray-800">पता</h3>
            <p className="text-lg text-gray-600">समिति कार्यालय</p>
            <p className="text-lg text-gray-600">मसमासी कलाँ</p>
          </div>
        </div>
        
        <div className="bg-orange-600  rounded-2xl p-8">
          <h3 className="text-3xl text-white text-center mb-6">सोशल मीडिया पर जुड़ें</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-7 h-7 text-orange-600" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7 text-orange-600" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-7 h-7 text-orange-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
