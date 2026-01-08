import { Calendar, Clock, MapPin, Music, Sparkles, Utensils } from 'lucide-react';

 function Event() {
  const events = [
    {
      day: "दिन 1-9",
      title: "प्रतिदिन आरती एवं भजन",
      time: "प्रातः 6:00 बजे और सायं 7:00 बजे",
      icon: Music,
      color: "bg-orange-400"
    },
    {
      day: "विशेष कार्यक्रम",
      title: "सांस्कृतिक कार्यक्रम एवं प्रतियोगिताएं",
      time: "सायं 8:00 बजे से",
      icon: Sparkles,
      color: "bg-purple-300"
    },
    {
      day: "दिन 8",
      title: "कन्या पूजन",
      time: "दोपहर 12:00 बजे",
      icon: Sparkles,
      color: "bg-yellow-400"
    },
    {
      day: "दिन 9",
      title: "महा आरती एवं भंडारा",
      time: "सायं 7:00 बजे",
      icon: Utensils,
      color: "bg-red-400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-linear-to-r from-orange-200 to-red-300 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Calendar className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-5xl mb-4 text-orange-900">कार्यक्रम सूची</h2>
          <p className="text-xl text-gray-600">Event Schedule</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-2  ${event.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3  ${event.color} rounded-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">{event.day}</div>
                      <h3 className="text-2xl mb-2 text-gray-800">{event.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12  bg-red-500 text-white rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <MapPin className="w-10 h-10" />
          </div>
          <h3 className="text-3xl mb-3">स्थान</h3>
          <p className="text-xl mb-2">समिति पंडाल मैदान</p>
          <p className="text-lg opacity-90">स्कूल के पास मसमासी</p>
        </div>
      </div>
    </section>
  );
}

export default Event
