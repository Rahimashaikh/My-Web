import Link from "next/link";



<header className="bg-pink-200 p-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo or Heading */}
    <div className="flex items-center">
      <h1 className="text-4xl font-bold text-pink-600">Glam & Glow</h1>
    
    </div>

    {/* Navigation Links */}
    <nav>
      <ul className="flex space-x-6">
        <li><Link href="/home" className="text-pink-600 hover:text-pink-800">Home</Link></li>
        <li><Link href="#about" className="text-pink-600 hover:text-pink-800">About</Link></li>
        <li><Link href="#products" className="text-pink-600 hover:text-pink-800">Products</Link></li>
      </ul>
    </nav>
  </div>
</header>
