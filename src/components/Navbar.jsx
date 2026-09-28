import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export default function Navbar() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll handler
  const handleScrollTo = (sectionId) => {
    if (location.pathname !== '/') {
      // If on another route (e.g. /login), navigate home first then scroll
      navigate('/');
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on homepage
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0047FF] text-white px-8 py-5 flex items-center justify-between border-b border-blue-500/30 backdrop-blur-md bg-opacity-95">
      
      {/* Logo */}
      <button 
        onClick={() => handleScrollTo('home')} 
        className="flex items-center gap-2.5 focus:outline-none"
      >
        <div className="w-7 h-7 bg-[#d2f800] rounded-sm flex items-center justify-center font-black text-black text-xs">
          b
        </div>
        <span className="text-xl font-extrabold tracking-tight text-white">
          ByteSpace
        </span>
      </button>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-100">
        <button 
          onClick={() => handleScrollTo('home')} 
          className="hover:text-[#d2f800] transition-colors focus:outline-none"
        >
          Home
        </button>
        <button 
          onClick={() => handleScrollTo('courses')} 
          className="hover:text-[#d2f800] transition-colors focus:outline-none"
        >
          Courses
        </button>
        <button 
          onClick={() => handleScrollTo('creators')} 
          className="hover:text-[#d2f800] transition-colors focus:outline-none"
        >
          Creators
        </button>
      </div>

      {/* Auth Actions */}
      <div className="flex items-center gap-6 text-xs">
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-200">
              Welcome, <strong className="text-white">{user?.name || user?.email}</strong>
            </span>
            <button 
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1.5 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-gray-100 font-medium">
            <Link to="/login" className="hover:text-white transition-colors">
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="bg-[#d2f800] hover:bg-[#c2e800] text-black font-semibold px-4 py-2 rounded-full transition-all"
            >
              Join Us
            </Link>
          </div>
        )}
      </div>

    </nav>
  );
}