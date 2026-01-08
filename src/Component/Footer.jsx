import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl mb-4">जय माता दी</h3>
        <p className="text-xl mb-6 text-orange-200">Jai Mata Di</p>
        
        <div className="border-t border-orange-700 pt-6 mt-6">
          <p className="flex items-center justify-center gap-2 text-orange-200">
            Made with <Heart className="w-5 h-5 text-red-400 fill-current" /> by Vivek Jyoti Navdurga Samiti Masmasi
          </p>
          <p className="mt-2 text-orange-300">
            © 2026 Vivek Jyoti Navdurga Samiti Masmasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;