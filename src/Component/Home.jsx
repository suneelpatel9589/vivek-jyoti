import { Calendar } from 'lucide-react';
function Home(){
    return(
        <>
    <div className="relative h-screen flex items-center bg-linear-to-l from-orange-400 to-red-600 justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        {/* <img src="diwali1.jpg" alt=""  className=''/> */}
        <div className="absolute inset-0 "></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
         <img src="" alt="" />
        </div>
        
        <h1 className="text-2xl md:text-3xl mb-6 text-orange-100">
          विवेक ज्योति नवदुर्गा समिति मसमासी
        </h1>
        
        <p className="text-2xl md:text-3xl mb-4 text-orange-200">
          Vivek Jyoti Navdurga Samiti Masmasi
        </p>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          माँ दुर्गा के नौ रूपों का भव्य उत्सव
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2 bg-orange-600/80 backdrop-blur-sm px-6 py-3 rounded-full">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">10-21 अक्टूबर 2026</span>
          </div>
        </div>
      </div>
    </div>
  


        </>
    )
}

export default Home