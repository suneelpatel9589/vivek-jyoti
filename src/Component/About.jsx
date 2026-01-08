function About(){
    return(
        <>
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            
          </div>
          <h2 className="text-5xl mb-4 text-orange-900">हमारे बारे में</h2>
          <p className="text-xl text-gray-600">About Our Committee</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8  rounded-2xl shadow-lg bg-pink-200">
            <div className="flex justify-center mb-4">
              
            </div>
            <h3 className="text-2xl mb-3 text-gray-800">हमारा उद्देश्य</h3>
            <p className="text-gray-600 leading-relaxed">
              माँ दुर्गा के नौ रूपों की भक्ति और समाज में सांस्कृतिक एकता को बढ़ावा देना
            </p>
          </div>
          
          <div className="text-center p-8  rounded-2xl shadow-lg  bg-pink-200">
            <div className="flex justify-center mb-4">
              
            </div>
            <h3 className="text-2xl mb-3 text-gray-800">हमारा समुदाय</h3>
            <p className="text-gray-600 leading-relaxed">
              सभी आयु वर्ग के भक्तों और स्वयंसेवकों का एक समर्पित समूह
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl shadow-lg  bg-pink-200">
            <div className="flex justify-center mb-4">
              
            </div>
            <h3 className="text-2xl mb-3 text-gray-800">हमारी परंपरा</h3>
            <p className="text-gray-600 leading-relaxed">
              25 वर्षों से अधिक समय से नवरात्रि उत्सव का भव्य आयोजन
            </p>
          </div>
        </div>
        
        <div className=" rounded-2xl p-8 md:p-12  bg-pink-200">
          <h3 className="text-3xl mb-6 text-orange-900 text-center">नवदुर्गा - माँ के नौ रूप</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <p className="mb-2"><span className="text-orange-600">दिन 1:</span> शैलपुत्री</p>
              <p className="mb-2"><span className="text-orange-600">दिन 2:</span> ब्रह्मचारिणी</p>
              <p className="mb-2"><span className="text-orange-600">दिन 3:</span> चंद्रघंटा</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <p className="mb-2"><span className="text-orange-600">दिन 4:</span> कूष्मांडा</p>
              <p className="mb-2"><span className="text-orange-600">दिन 5:</span> स्कंदमाता</p>
              <p className="mb-2"><span className="text-orange-600">दिन 6:</span> कात्यायनी</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <p className="mb-2"><span className="text-orange-600">दिन 7:</span> कालरात्रि</p>
              <p className="mb-2"><span className="text-orange-600">दिन 8:</span> महागौरी</p>
              <p className="mb-2"><span className="text-orange-600">दिन 9:</span> सिद्धिदात्री</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
        
        </>
    )
}
export default About