import { useSelector } from 'react-redux';

export default function Home({ setCurrentPage }) {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
        Build Faster with Our Platform
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        A lightweight solution for managing your web applications with integrated state management and Tailwind CSS.
      </p>

      {isAuthenticated ? (
        <div className="mt-10 p-6 bg-white rounded-xl border border-gray-200 text-left max-w-md mx-auto shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard Overview</h3>
          <p className="text-gray-600 text-sm mb-1">
            Logged in as: <strong className="text-gray-900">{user?.email}</strong>
          </p>
          <p className="text-gray-600 text-sm">
            Status: <span className="text-emerald-600 font-semibold">Active Session</span>
          </p>
        </div>
      ) : (
        <div className="mt-6">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5"
            onClick={() => setCurrentPage('register')}
          >
            Get Started Free
          </button>
        </div>
      )}
    </div>
  );
}