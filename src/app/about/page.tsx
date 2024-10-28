
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
<div>
<div className="flex flex-col min-h-screen">
      <div className="bg-gray-300 p-4">
        <h1 className="text-2xl font-bold border-b border-gray-800 text-pink-500 text-center">
          Glam & Glow About page
        </h1>

        </div>

        <div className="relative bg-cover bg-center min-h-screen mb-4">
  <video 
    src="/images/mp4.mp4" 
    autoPlay
    loop
    muted
    className="w-full h-auto object-cover"
  ></video>

 
 
  <div className="flex items-center space-x-2 mt-6">
    <h1 className="text-white text-lg bg-pink-700 bg-opacity-70">
      <b>Welcome to Glam & Glow About Page – where beauty meets quality!</b> At Glam & Glow, we believe that every person deserves products that enhance their natural radiance. Our carefully curated selection includes only the finest, authentic beauty essentials designed to empower you with confidence. Find the perfect touch for a special occasion, we ensure quality and satisfaction with every purchase. Shop with trust and let us help you discover your most beautiful self.
      <b> HAPPY SHOPPING!!!!</b>
    </h1>
  </div>
</div>

</div>


      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 mb-6">
              <h2 className="text-pink-500 text-3xl font-bold">Glam & Glow</h2>
              <p className="text-gray-400 mt-2">
                Your go-to beauty destination for top-quality cosmetics.
              </p>
            </div>

            <div className="w-full sm:w-1/3 mb-6">
              <h3 className="text-pink-500 text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-pink-400">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-pink-400">About</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-pink-400">Products</Link></li>
              </ul>
            </div>

            <div className="w-full sm:w-1/3 mb-6">
              <h3 className="text-pink-500 text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/rahima.cuteie" className="text-gray-400 hover:text-pink-400">
                  <FaFacebook /> 
                </a>
                <a href="https://www.instagram.com/" className="text-gray-400 hover:text-pink-400">
                  <FaInstagram /> 
                </a>
                <a href="https://www.linkedin.com/in/rahima-shaikh-2b09a328b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BRvMI%2Fz8GRFWXO6kLt3gtdg%3D%3D" className="text-gray-400 hover:text-pink-400">
                  <FaLinkedin /> 
                </a>
              </div>
            </div>
          </div>


        <div className="mt-4 sm:mt-6 sm:text-center lg:text-left">
           <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-semibold">
           Founder of <span className="text-pink-500 font-bold">Glam & Glow</span>, Rahima Salahuddin
           </p>
        </div>




          <div className="text-center mt-8 border-t border-gray-600 pt-4">
            <p className="text-gray-500">&copy; 2024 Glam & Glow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  

  );
}
