import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export default function Navbar({ currentPage, setCurrentPage }) {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Hide the Navbar on Login and Register pages
  if (currentPage === 'login' || currentPage === 'register') {
    return null;
  }

  return (
    <nav className="w-full bg-[#0047FF] text-white px-8 py-5 flex items-center justify-between border-b border-blue-500/30">
      
      {/* Left: ByteSpace Logo */}
      <div 
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => setCurrentPage('home')}
      >
        <svg 
          className="w-7 h-6 text-[#d2f800]" 
          viewBox="0 0 38 32" 
          fill="currentColor"
        >
          <path d="M10 2C4.5 2 0 6.5 0 12c0 8 10 18 10 18s2.5-7 2.5-12C12.5 6.5 17 2 22.5 2H10z" />
          <path d="M16 12c0 6.5 5 12 11.5 12C33 24 38 19.5 38 14c0-6-7.5-12-14-12H16v10z" />
        </svg>
        <span className="text-xl font-black tracking-tight text-white">
          ByteSpace
        </span>
      </div>

      {/* Center Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-100">
        <button 
          onClick={() => setCurrentPage('home')} 
          className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-white font-bold' : ''}`}
        >
          Home
        </button>
        <button className="hover:text-white transition-colors">
          Courses
        </button>
        <button className="hover:text-white transition-colors">
          Creators
        </button>
      </div>

      {/* Right: Auth Actions & Shopping Bag */}
      <div className="flex items-center gap-6 text-xs">
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-200">
              Welcome, <strong className="text-white">{user?.name || user?.email}</strong>
            </span>
            <button 
              onClick={() => dispatch(logout())}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1.5 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-gray-100 font-medium">
            <button 
              onClick={() => setCurrentPage('login')} 
              className="hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => setCurrentPage('register')} 
              className="hover:text-white transition-colors"
            >
              Join Us
            </button>
          </div>
        )}

        {/* Shopping Bag Icon */}
        <button 
          className="text-gray-100 hover:text-white transition-colors" 
          aria-label="Shopping Cart"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.8} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.25 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm7.5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
          </svg>
        </button>
      </div>

    </nav>
  );
}