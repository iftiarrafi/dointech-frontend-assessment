import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route is Login or Register
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const handleScrollTo = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent text-white px-8 py-6 flex items-center justify-between">
      {/* Logo */}
      <button
        onClick={() => handleScrollTo("home")}
        className="flex items-center gap-2.5 focus:outline-none"
      >
        <div className="h-12 w-12 rounded-lg flex items-center justify-center">
          <img src="/Vector.svg" alt="Icon" className="w-8 h-8" />
        </div>
        {!isAuthPage && (
          <span className="font-clash text-xl font-extrabold tracking-tight text-white">
            ByteSpace New
          </span>
        )}
      </button>

      {/* Navigation & Actions (Hidden on Login/Register) */}
      {!isAuthPage && (
        <>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
            <button
              onClick={() => handleScrollTo("home")}
              className="hover:text-[#d2f800] transition-colors focus:outline-none"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo("courses")}
              className="hover:text-[#d2f800] transition-colors focus:outline-none"
            >
              Courses
            </button>
            <button
              onClick={() => handleScrollTo("creators")}
              className="hover:text-[#d2f800] transition-colors focus:outline-none"
            >
              Creators
            </button>
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-6 text-sm">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-200">
                  Welcome,{" "}
                  <strong className="text-white">
                    {user?.name || user?.email}
                  </strong>
                </span>
                <button
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-1.5 rounded-full transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-6 text-gray-200 font-medium">
                <Link
                  to="/login"
                  className="hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="hover:text-white transition-colors"
                >
                  Join Us
                </Link>
                {/* Shopping Bag Icon */}
                <button className="text-white hover:text-[#d2f800] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}
