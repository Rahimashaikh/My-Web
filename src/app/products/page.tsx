  import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Products() {
  return (
    <main className="bg-slate-200 bg-cover bg-center min-h-screen">

            
      <h1 className="text-center font-bold text-4xl bg-pink-300 mt-5 mb-5 p-3">
        Get Your Cosmetic Products
      </h1>

      <div className="flex justify-center flex-wrap gap-4 px-4">
        
        {[
          { id: 1, imgSrc: "/images/download (4).jpeg", name: "Sephora Concealer", price: "Price= $25" },
          { id: 2, imgSrc: "/images/download (6).jpeg", name: "Fenty Beauty Liquid Eye Shadow", price: "Price= $20" },
          { id: 3, imgSrc: "/images/download (7).jpeg", name: "Cover FX Highlighter", price: "Price= $20" },
          { id: 4, imgSrc: "/images/download (9).jpeg", name: "Maybelline Crayons", price: "Price= $70" },
          { id: 5, imgSrc: "/images/download (12).jpeg", name: "Savvy Minerals By Young Living", price: "Price= $70" },
          { id: 6, imgSrc: "/images/download (10).jpeg", name: "Christine Diva Marron", price: "Price= $35" },
          { id: 7, imgSrc: "/images/download (11).jpeg", name: "Zero Makeup Palette", price: "Price= $100" },
          { id: 8, imgSrc: "/images/download (13).jpeg", name: "Beauty Tint Fairy Pink", price: "Price= $10" },
          { id: 9, imgSrc: "/images/download (14).jpg", name: "Bio Aqua BB Cream", price: "Price= $15" },
          { id: 10, imgSrc: "/images/download (17).jpg", name: "Pixi Blush", price: "Price= $35" },
          { id: 11, imgSrc: "/images/download (18).jpg", name: "Sheglam Highlighted Blush", price: "Price= $30" },
          { id: 12, imgSrc: "/images/download (19).jpg", name: "Beautify Eye Shadow", price: "Price= $35" },
          { id: 13, imgSrc: "/images/download (20).jpg", name: "Da New All In One Makeup Palette", price: "Price= $150" },
          { id: 14, imgSrc: "/images/download (21).jpeg", name: "Vitamin C Brightening Therapy Jo's Beauty", price: "Price= $60" },
          { id: 15, imgSrc: "/images/download (22).jpeg", name: "Glow Mask Jo's Beauty", price: "Price= $60" },
          { id: 16, imgSrc: "/images/download (23).jpeg", name: "Rose Blush Body Scrub Jo's Beauty", price: "Price= $60" },
          { id: 17, imgSrc: "/images/download (24).jpg", name: "Cera Ve Hydrating Mineral Sunscreen", price: "Price= $35" },
          { id: 18, imgSrc: "/images/download (25).jpeg", name: "Herbion Face Wash", price: "Price= $20" },
          { id: 19, imgSrc: "/images/download (26).jpg", name: "Floral Lip Pencils", price: "Price= $15" },
          { id: 20, imgSrc: "/images/download (27).jpeg", name: "Brightening Cream by Dark Out", price: "Price= $30" },
          { id: 21, imgSrc: "/images/download (28).jpg", name: "Milky Tint", price: "Price= $25" },
          { id: 22, imgSrc: "/images/download (29).jpg", name: "HudaMoji Lip Contour", price: "Price= $40" },
          { id: 23, imgSrc: "/images/download (30).jpg", name: "Sheglam Glosses", price: "Price= $30" },
          { id: 24, imgSrc: "/images/download(15).jpg", name: "Beautify Palette", price: "Price= $25" },
          { id: 25, imgSrc: "/images/download(16).jpg", name: "Pixi Blush Contour", price: "Price= $60" },
        ].map((product) => (
          <div
            key={product.id}
            className="w-[250px] h-[320px] bg-pink-300 flex flex-col items-center p-4 hover:bg-gray-300 transition duration-300 rounded-lg shadow-lg"
          >
            <Image src={product.imgSrc} width={150} height={150} alt={product.name} />
            <h2 className="mt-2 font-semibold text-center">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>

      
      <footer className="bg-gray-800 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-pink-400 text-xl font-bold">Glam & Glow</h2>
            <p className="text-gray-400">Your go-to beauty destination for top-quality cosmetics.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-pink-400 font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-pink-400 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/rahima.cuteie" className="text-gray-400 hover:text-pink-400" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/" className="text-gray-400 hover:text-pink-400" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/rahima-shaikh-2b09a328b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BRvMI%2Fz8GRFWXO6kLt3gtdg%3D%3D" 
              className="text-gray-400 hover:text-pink-400" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 sm:text-center lg:text-left">
           <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-semibold">
           Founder of <span className="text-pink-400 font-bold">Glam & Glow</span>, Rahima Salahuddin
           </p>
        </div>




          <div className="text-center mt-8 border-t border-gray-600 pt-4">
            <p className="text-gray-500">&copy; 2024 Glam & Glow. All rights reserved.</p>
          </div>
      </footer>
    </main>
  );
}
