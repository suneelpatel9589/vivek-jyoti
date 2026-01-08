// import { Users, Award } from 'lucide-react';

// function Cometti() {
//   const members = [
//     { name: "Sanjay patel", position: "अध्यक्ष (President)" },
//     { name: "Shailendra patel", position: "उपाध्यक्ष (Vice President)" },
//     { name: "Santosh patel", position: "सचिव (Secretary)" },
//     { name: "Vijay patel", position: "कोषाध्यक्ष (Treasurer)" },
//     { name: "Ramnihor patel", position: "सुरक्षा प्रभारी (Security Head)" },
//     { name: "Ravishankar vishwakarma", position: "कार्यक्रम प्रभारी (Program Head)" },
//     { name: "Rajesh mishra", position: "पुजारी (Hindu priest)" },
//     { name: "Atul patel", position: "पंडा (Panda)" }
//   ];

//   return (
//     <section className="py-20 px-4 bg-amber-200">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <div className="flex justify-center mb-4">
//             <Users className="w-12 h-12 text-orange-600" />
//           </div>
//           <h2 className="text-5xl mb-4 text-orange-900">समिति सदस्य</h2>
//           <p className="text-xl text-gray-600">Committee Members</p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {members.map((member, index) => (
//             <div 
//               key={index}
//               className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
//             >
//               <div className="flex justify-center mb-4">
//                 <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
//                   <Award className="w-10 h-10 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl mb-2 text-gray-800">{member.name}</h3>
//               <p className="text-orange-600">{member.position}</p>
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
//           <h3 className="text-3xl mb-4 text-orange-900">स्वयंसेवक बनें</h3>
//           <p className="text-xl text-gray-600 mb-6">
//             इस पावन उत्सव में अपना योगदान दें और समिति का हिस्सा बनें
//           </p>
//           <p className="text-lg text-gray-500">
//             Become a Volunteer and be part of this sacred celebration
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Cometti
import { Users, Award } from 'lucide-react';

function Cometti() {
  const members = [
    { 
      name: "Mr. Sanjay patel", 
      position: "अध्यक्ष (President)",
      image: "sanjay.jpeg"
    },
    { 
      name: "Mr. Shailendra patel", 
      position: "उपाध्यक्ष (Vice President)",
      image: "bhole.jpeg"
    },
    { 
      name: "Mr. Santosh patel", 
      position: "सचिव (Secretary)",
      image: "santosh.jpeg"
    },
    { 
      name: "Mr. Vijay patel", 
      position: "कोषाध्यक्ष (Treasurer)",
      image: "vijay.jpeg"
    },
    { 
      name: "Mr. Ramnihor patel", 
      position: "सुरक्षा प्रभारी (Security Head)",
      image: "ramni.jpeg"
    },
    { 
      name: "Mr. Ravishankar vishwakarma", 
      position: "कार्यक्रम प्रभारी (Program Head)",
      image: "diwali1.jpg"
    },
    { 
      name: "Mr. Rajesh mishra", 
      position: "पुजारी (Hindu priest)",
      image: "pandit.jpeg"
    },
    { 
      name: "Mr. Atul patel", 
      position: "पंडा (Panda)",
      image: "atul.jpeg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-5xl mb-4 text-orange-900">समिति सदस्य</h2>
          <p className="text-xl text-gray-600">Committee Members</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-200 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl mb-2 text-gray-800">{member.name}</h3>
              <p className="text-orange-600">{member.position}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-3xl mb-4 text-orange-900">स्वयंसेवक बनें</h3>
          <p className="text-xl text-gray-600 mb-6">
            इस पावन उत्सव में अपना योगदान दें और समिति का हिस्सा बनें
          </p>
          <p className="text-lg text-gray-500">
            Become a Volunteer and be part of this sacred celebration
          </p>
        </div>
      </div>
    </section>
  );
}
export default Cometti