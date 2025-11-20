export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SEMBARK</h2>
          <p className="text-gray-400 text-sm leading-6">
            Your trusted store for quality products.  
            Shop with confidence and explore our latest collections.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/cart" className="hover:text-white">Cart</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">
            Email: support@sembark.com
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Phone: +91 98765 43210
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Address: Mumbai, India
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SEBMARK. All rights reserved.
      </div>
    </footer>
  );
};
