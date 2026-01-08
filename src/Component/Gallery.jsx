

import { Camera } from 'lucide-react';

 function Gallery() {
  const images = [
    {
      src: "durga.jpg",
      title: "माँ दुर्गा प्रतिमा"
    },
    {
      src: "dandiya.jpg",
      title: "उत्सव का आनंद"
    },
    {
       src: "pandal.jpg",
      title: "पंडाल सज्जा"
    },
    {
      src: "dance.webp",
      title: "सांस्कृतिक नृत्य"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Camera className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-5xl mb-4 text-orange-900">फोटो गैलरी</h2>
          <p className="text-xl text-gray-600">Photo Gallery</p>
          <p className="text-gray-500 mt-2">पिछले वर्षों की झलकियां</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Gallery