import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setAuthError } from "../features/auth/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      dispatch(setAuthError("Please enter both email and password."));
      return;
    }

    // Mock Redux login dispatch
    dispatch(loginSuccess({ email, name: email.split("@")[0] }));
    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-[#0047FF] text-white font-sans flex items-center justify-center p-6 lg:p-12 pt-28 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main Grid Wrapper */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: Text & Stacked Cards Visual */}
        <div className="lg:col-span-6 space-y-8">
          {/* Heading & Paragraph */}
          <div className="max-w-md space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Sign in with ease
            </h1>
            <p className="text-blue-100/90 text-sm leading-relaxed">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          {/* Stacked Graphic Composition */}
          <div className="relative w-full max-w-md h-[320px] pt-4 hidden sm:block">
            {/* Background Course Card (Build Digital Asset) */}
            <div className="absolute top-10 left-0 w-64 bg-white text-gray-900 rounded-2xl p-2.5 shadow-xl rotate-[-6deg]">
              <div className="h-28 bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80"
                  alt="Build Digital"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <p className="font-bold text-xs truncate">
                  Build Digital Asset
                </p>
                <p className="text-[10px] text-gray-400">by purepearl studio</p>
                <div className="mt-2 flex items-center justify-between text-[10px]">
                  <span className="bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                    Beginner
                  </span>
                  <span className="font-bold text-blue-600">
                    $25
                    <span className="text-gray-400 font-normal">/lifetime</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Foreground Course Card (the Power of Big Data) */}
            <div className="absolute top-0 right-4 w-72 bg-white text-gray-900 rounded-2xl p-3 shadow-2xl z-10">
              <div className="relative h-32 bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
                  alt="Big Data"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[9px] text-white bg-black/60 backdrop-blur-sm p-1 rounded-md">
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                  <span>59 Comments</span>
                </div>
              </div>
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-xs">the Power of Big Data</p>
                  <span className="text-[10px] font-bold text-gray-500">
                    4.5 <span className="text-yellow-400">★</span>
                  </span>
                </div>
                <p className="text-[10px] text-blue-600">by purepearl studio</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">
                    Beginner
                  </span>
                  <span className="font-bold text-blue-600 text-xs">
                    $25
                    <span className="text-gray-400 font-normal">/lifetime</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Lime Card: Happy Students */}
            <div className="absolute bottom-2 left-24 bg-[#d2f800] text-black rounded-2xl p-3.5 shadow-xl z-20 w-52">
              <p className="font-bold text-xs">Happy Students</p>
              <p className="text-[10px] font-semibold text-gray-800">
                4.5 (240) ★
              </p>
              <div className="flex -space-x-1.5 mt-2">
                <img
                  className="w-5 h-5 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt=""
                />
                <img
                  className="w-5 h-5 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                  alt=""
                />
                <img
                  className="w-5 h-5 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80"
                  alt=""
                />
                <span className="w-5 h-5 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center">
                  2K+
                </span>
              </div>
            </div>

            {/* Decorative 3D Shapes */}
            <div className="absolute top-3 left-16 z-20 text-[#d2f800] text-5xl pointer-events-none drop-shadow">
              ⭕
            </div>
            <div className="absolute bottom-6 right-0 z-20 text-white text-5xl pointer-events-none opacity-90">
              〰
            </div>
            <div className="absolute bottom-0 left-4 z-0 text-[#d2f800] text-6xl pointer-events-none">
              ▲
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: White Login Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white text-gray-900 rounded-[32px] p-8 sm:p-12 shadow-2xl w-full max-w-md">
            <p className="text-xs font-semibold text-blue-600 tracking-wide mb-1">
              Sign In
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
              Welcome Back
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#d2f800] hover:bg-[#c2e800] text-black font-semibold px-8 py-3 rounded-full text-sm transition-all shadow-md active:scale-95"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* "or" Divider */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="w-full border-t border-gray-200"></div>
              <span className="absolute bg-white px-3 text-xs text-gray-400 font-medium">
                or
              </span>
            </div>

            {/* Social Logins */}
            <div className="flex justify-center gap-4">
              {/* Facebook Button */}
              <button
                type="button"
                className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition-colors shadow-sm"
                aria-label="Sign in with Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* Google Button */}
              <button
                type="button"
                className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition-colors shadow-sm"
                aria-label="Sign in with Google"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.987 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
            </div>

            {/* Switch to Register */}
            <div className="mt-10 text-center text-xs text-gray-500">
              New user?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}