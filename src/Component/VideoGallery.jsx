import { Video, Play } from 'lucide-react';
import { useState } from 'react';

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const videos = [
    {
      id: 1,
      title: "नवरात्रि 2024 - महा आरती",
      year: "2024",
      thumbnail: "durga.jpg",
      videoUrl: "https://www.youtube.com/embed/mEfgVVZTI9Q" 
    },
    {
      id: 2,
      title: "सांस्कृतिक कार्यक्रम 2024",
      year: "2024",
      thumbnail: "dandiya.jpg",
      videoUrl: "https://www.youtube.com/embed/w6AOdni0mB4"
    },
    {
      id: 3,
      title: "कन्या पूजन 2023",
      year: "2023",
      thumbnail: "dance.webp",
      videoUrl: "https://www.youtube.com/embed/XmO6Vz2AYck"
      
      
    },
    {
      id: 4,
      title: "पंडाल दर्शन 2023",
      year: "2023",
      thumbnail: "pandal.jpg",
      videoUrl: "https://www.youtube.com/embed/TLofPAbPfp0"
    },
    {
      id: 5,
      title: "भजन संध्या 2022",
      year: "2022",
      thumbnail: "durga.jpg",
      videoUrl: "https://www.youtube.com/embed/Eh6-lRbe-Sg"
    },
    {
      id: 6,
      title: "नवरात्रि समारोह 2022",
      year: "2022",
      thumbnail: "dandiya.jpg",
      videoUrl: "https://www.youtube.com/embed/nBZZKvxjiD8"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Video className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-5xl mb-4 text-orange-900">वीडियो गैलरी</h2>
          <p className="text-xl text-gray-600">Video Gallery</p>
          <p className="text-gray-500 mt-2">पिछले वर्षों के कार्यक्रम</p>
        </div>
        
        {/* Video Modal */}
{selectedVideo && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedVideo(null)}
  >
    <div
      className="relative w-full max-w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute -top-12 right-0 text-white text-xl hover:text-orange-400"
      >
        ✕ बंद करें
      </button>

      <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden">
        <iframe
          src={`${selectedVideo}?autoplay=1&rel=0`}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
)}

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  {video.year}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full text-xl hover:from-orange-700 hover:to-red-700 transition-all shadow-lg"
          >
            <Video className="w-6 h-6" />
            YouTube पर और देखें
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoGallery