import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export default function Navbar({ setCurrentPage }) {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h2 
        className="text-xl font-bold cursor-pointer hover:text-blue-400 transition-colors"
        onClick={() => setCurrentPage('home')}
      >
        MyApp
      </h2>
      
      <div className="flex items-center space-x-4">
        <button 
          className="text-gray-300 hover:text-white text-sm font-medium transition-colors" 
          onClick={() => setCurrentPage('home')}
        >
          Home
        </button>
        
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">
              Welcome, <strong className="text-white">{user?.name || user?.email}</strong>
            </span>
            <button 
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <button 
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors px-3 py-2" 
              onClick={() => setCurrentPage('login')}
            >
              Login
            </button>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm"
              onClick={() => setCurrentPage('register')}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}