import Image from "next/image";
import Link from "next/link";
import { GiLipstick } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  return (
    <div>
      <header className="bg-gray-600 p-1">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-pink-700">Glam & Glow</h1>
            <Image
              src="/82449520_9900243.png"
              alt="Cosmetic Image"
              width={50}
              height={50}
            />
          </div>

          <nav className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 text-pink-600" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className=" bg-slate-200 font-bold text-pink-700 italic text-4xl">
                    Glam & Glow
                  </SheetTitle>
                  <SheetDescription>
                    <ul className=" font-bold mt-40 text-lg">
                      <li className=" bg-slate-200">
                        <Link
                          href="/about"
                          className="text-pink-700 bg-slate-200 italic text-3xl font-semibold hover:text-black"
                        >
                          About
                        </Link>
                      </li>
                      <li className=" bg-slate-200">
                        <Link
                          href="/products"
                          className="text-pink-700 bg-slate-200  italic text-3xl font-semibold hover:text-black"
                        >
                          Products
                        </Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </nav>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 text-lg">
              <li>
                <Link
                  href="/home"
                  className="text-pink-600 font-semibold hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-pink-600 font-semibold hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-pink-600 font-semibold hover:text-white"
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="relative">
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/image 2.jpg')" }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center space-x-2 mt-6 bg-gray-100">
              <h1 className="text-3xl font-bold">Welcome To Glam & Glow </h1>
              <GiLipstick className="text-pink-500 text-4xl float-right" />
            </div>

            <div className="mt-5 flex flex-col md:flex-row justify-center items-center w-full">
              <div className="md:w-1/2 mt-4 md:mt-10 md:ml-5 p-3">
                <p className="mt-0 text-black bg-gray-100 text-lg font-bold ">
                 <b>Your Ultimate Beauty
                  Destination! Step into a world of elegance and excellence, Glam & Glow
                  provides a luxurious selection crafted to enhance your natural
                  beauty.We pride ourselves on authenticity & quality for helping you feel your best.
                  Explore our collection and start your journey to a glowing
                  you!</b>
                </p>
            

                <div className="mt-1 mb-0">
                  <Link href="/products">
                    <button className="bg-pink-500 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="mb-6 sm:mb-0">
              <h2 className="text-pink-500 text-3xl font-bold">Glam & Glow</h2>
              <p className="text-gray-400 mt-4">
                Your go-to beauty destination for top-quality cosmetics.
              </p>
            </div>

            <div className="mb-6 sm:mb-0">
              <h3 className="text-pink-500 text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-pink-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-pink-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-pink-400"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 sm:mb-0">
              <h3 className="text-pink-500 text-lg font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/rahima.cuteie"
                  className="text-gray-400 hover:text-pink-400"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-gray-400 hover:text-pink-400"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahima-shaikh-2b09a328b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BRvMI%2Fz8GRFWXO6kLt3gtdg%3D%3D"
                  className="text-gray-400 hover:text-pink-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 sm:text-center lg:text-left">
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-semibold">
              Founder of{" "}
              <span className="text-pink-500 font-bold">Glam & Glow</span>,
              Rahima Salahuddin
            </p>
          </div>

          <div className="text-center mt-8 border-t border-gray-600 pt-4">
            <p className="text-gray-500">
              &copy; 2024 Glam & Glow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
