export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-900 font-sans px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg 
                className="w-9 h-8 text-[#d2f800]" 
                viewBox="0 0 38 32" 
                fill="currentColor"
              >
                <path d="M10 2C4.5 2 0 6.5 0 12c0 8 10 18 10 18s2.5-7 2.5-12C12.5 6.5 17 2 22.5 2H10z" />
                <path d="M16 12c0 6.5 5 12 11.5 12C33 24 38 19.5 38 14c0-6-7.5-12-14-12H16v10z" />
              </svg>
              <span className="text-2xl font-black tracking-tight text-black">
                ByteSpace
              </span>
            </div>

            {/* Newsletter Text */}
            <p className="text-gray-700 text-sm leading-relaxed max-w-md">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Input & Search Button */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 rounded-full border border-gray-300 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-[#d2f800] hover:bg-[#c2e800] text-black font-semibold px-8 py-3.5 rounded-full text-sm transition-colors shrink-0"
              >
                Search
              </button>
            </form>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 leading-normal max-w-sm pt-1">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Column: Navigation Links (3 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            
            {/* Column 1 */}
            <ul className="space-y-4 text-sm text-gray-800">
              <li><a href="#" className="hover:text-black transition-colors">Featured Courses</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Featured Categories</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-black transition-colors">IT</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Design</a></li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4 text-sm text-gray-800">
              <li><a href="#" className="hover:text-black transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Photography</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Finance</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sport</a></li>
            </ul>

            {/* Column 3 */}
            <ul className="space-y-4 text-sm text-gray-800">
              <li><a href="#" className="hover:text-black transition-colors">Become a Creator</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Help</a></li>
              <li><a href="#" className="hover:text-black transition-colors">About</a></li>
            </ul>

          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-200" />

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 gap-4">
          <div>
            @ 2023 ByteSpace. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}